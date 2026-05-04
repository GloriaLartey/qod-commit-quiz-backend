import mongoose, { Schema, Document } from "mongoose";

export interface IScore {
  category: string;
  score: number;
  date: Date;
}

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  scores: IScore[];
  createdAt: Date;

  // 🔑 FIX HERE
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
}

const ScoreSchema: Schema = new Schema({
  category: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  scores: { type: [ScoreSchema], default: [] },

  createdAt: { type: Date, default: Date.now },

  // 🔑 FIX HERE TOO
  resetPasswordToken: { type: String, default: null },
  resetPasswordExpires: { type: Date, default: null },
});

export default mongoose.model<IUser>("User", UserSchema);