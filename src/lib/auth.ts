import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { sendEmail } from "@/lib/email";

const uri = process.env.BETTER_AUTH_MONGO_URI;

if (!uri) {
  throw new Error("Conncetion problem to mongoDb");
}

const client = new MongoClient(uri);
const db = client.db("bazar-dor");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      void sendEmail({
        to: user.email,
        subject: "পাসওয়ার্ড রিসেট করুন | Bazar Dor",
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #e0e9e2; border-radius: 12px;">
            <h2 style="color: #07883e;">বাজার দর</h2>
            <p>হ্যালো ${user.name},</p>
            <p>আপনি আপনার পাসওয়ার্ড রিসেট করার অনুরোধ দিয়েছেন। নতুন পাসওয়ার্ড সেট করতে নিচের লিংকে ক্লিক করুন:</p>
            <p style="text-align: center; margin: 24px 0;">
              <a href="${url}" style="background: #07883e; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none;">পাসওয়ার্ড রিসেট করুন</a>
            </p>
            <p style="font-size: 12px; color: #666;">লিংকটি কিছুক্ষণের জন্য কার্যকর। আপনি এই অনুরোধ না করলে এই ইমেইলটি উপেক্ষা করুন।</p>
          </div>
        `,
      });
    },
    onPasswordReset: async ({ user }) => {
      console.log(`Password for user ${user.email} has been reset.`);
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      void sendEmail({
        to: user.email,
        subject: "ইমেইল যাচাই করুন | Bazar Dor",
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #e0e9e2; border-radius: 12px;">
            <h2 style="color: #07883e;">বাজার দর</h2>
            <p>হ্যালো ${user.name},</p>
            <p>আপনার ইমেইল ঠিকানা যাচাই করতে নিচের লিংকে ক্লিক করুন:</p>
            <p style="text-align: center; margin: 24px 0;">
              <a href="${url}" style="background: #07883e; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none;">ইমেইল যাচাই করুন</a>
            </p>
            <p style="font-size: 12px; color: #666;">লিংকটি কিছুক্ষণের জন্য কার্যকর।</p>
          </div>
        `,
      });
    },
  },
  socialProviders:{
    google:{
      clientId: process.env.BETTER_AUTH_GOGGLE_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_GOGGLE_CLIENT_SERECT as string
    },
    github:{
      clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SERECT as string
    }
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
