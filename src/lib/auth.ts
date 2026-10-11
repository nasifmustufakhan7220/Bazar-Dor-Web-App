import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

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
  requireEmailVerification: true,
  database: mongodbAdapter(db, {
    client,
  }),
});
