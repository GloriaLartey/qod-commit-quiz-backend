import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

//connect to the database
export async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Mongoose connected successfully");
  } catch (err) {
    console.error("Connection error", err);
  }
}
