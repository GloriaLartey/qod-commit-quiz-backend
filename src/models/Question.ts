import mongoose, { Schema, Document } from "mongoose";

export interface IQuestion extends Document {
  question: string;
  options: [string];
  answer: string;
  category: string;
}

const questionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true },
  category: { type: String, required: true },
});

export default mongoose.model<IQuestion>("Question", questionSchema);