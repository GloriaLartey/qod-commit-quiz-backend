import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "../models/Question.js";

import { htmlQuestions } from "../data/html.js";
import { cssQuestions } from "../data/css.js";
import { javascriptQuestions } from "../data/js.js";
import { tailwindQuestions } from "../data/tailwind.js";
import { typescriptQuestions } from "../data/ts.js";
import { vueQuestions } from "../data/vue.js";
import { reactQuestions } from "../data/react.js";
import { generalQuestions } from "../data/general.js";
import { pythonQuestions } from "../data/python.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env");
  process.exit(1);
}

const seed = async () => {
  try {
    // ✅ Connect DB
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    // ✅ Clear existing questions
    await Question.deleteMany({});
    console.log("🗑 Old questions deleted");

    // ✅ Add category to each dataset
    const html = htmlQuestions.map((q) => ({ ...q, category: "html" }));
    const css = cssQuestions.map((q) => ({ ...q, category: "css" }));
    const javascript = javascriptQuestions.map((q) => ({
      ...q,
      category: "javascript",
    }));
    const typescript = typescriptQuestions.map((q) => ({
      ...q,
      category: "typescript",
    }));
    const tailwind = tailwindQuestions.map((q) => ({
      ...q,
      category: "tailwind",
    }));
    const react = reactQuestions.map((q) => ({
      ...q,
      category: "react",
    }));
    const vue = vueQuestions.map((q) => ({ ...q, category: "vue" }));
    const python = pythonQuestions.map((q) => ({
      ...q,
      category: "python",
    }));
    const general = generalQuestions.map((q) => ({
      ...q,
      category: "general",
    }));

    // ✅ Insert all questions
    await Question.insertMany([
      ...html,
      ...css,
      ...javascript,
      ...typescript,
      ...tailwind,
      ...react,
      ...vue,
      ...python,
      ...general,
    ]);

    console.log("🎉 Questions Seeded Successfully");

    // ✅ Properly close connection
    await mongoose.connection.close();
    process.exit(0);

  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seed();