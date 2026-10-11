import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.BEETER_AUTH_MONGO_URI;

if (!uri) {
  throw new Error("Conncetion problem to mongoDb");
}

const client = new MongoClient(uri);
const db = client.db("bazar-dor");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  requireEmailVerification: true,
  database: mongodbAdapter(db, {
    client,
  }),
});
