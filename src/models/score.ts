import mongoose, { Schema, Document } from "mongoose";

export interface IScore extends Document {
  user: mongoose.Types.ObjectId;
  category: string;
  score: number;
  createdAt: Date;
}

const scoreSchema = new Schema<IScore>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: String, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<IScore>("Score", scoreSchema);