import type { Request, Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware.js";
import mongoose from "mongoose";

import Question from "../models/Question.js";
import User from "../models/User.js";
import Score from "../models/score.js";

/* -------------------------------
   SAVE SCORE
--------------------------------*/
export const saveScore = async (req: AuthRequest, res: Response) => {
  try {
    const { category, score } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!category || typeof score !== "number") {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const newScore = await Score.create({
      user: user._id,
      category: category.toLowerCase(),
      score,
    });

    return res.status(201).json({
      message: "Score saved successfully",
      score: newScore,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* -------------------------------
   FETCH LOGGED-IN USER SCORES
--------------------------------*/
export const fetchScore = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const scores = await Score.find({ user: user._id }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: "Scores fetched successfully",
      count: scores.length,
      scores,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* -------------------------------
   FETCH QUIZ BY CATEGORY
--------------------------------*/
export const fetchQuizByCategory = async (req: Request, res: Response) => {
  try {
    const rawCategory = req.params.category;
    console.log("Requested category:", req.params.category);

    // ✅ Validate param safely
    if (typeof rawCategory !== "string") {
      return res.status(400).json({ message: "Invalid category" });
    }

    const category = rawCategory.toLowerCase();

    // 🎯 dynamic limit (default 10)
    const limit = Number(req.query.limit) || 10;

    const questions = await Question.aggregate([
      {
        $match: {
          category: category,
        },
      },
      {
        $sample: { size: limit },
      },
      {
        $project: {
          question: 1,
          options: 1,
          category: 1,
          answer: 1,
        },
      },
    ]);

    if (!questions.length) {
      return res.status(404).json({
        message: `No questions found for category: ${category}`,
      });
    }

    return res.status(200).json({
      message: "Questions fetched successfully",
      count: questions.length,
      questions,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* -------------------------------
   FETCH SCORES BY USER ID
--------------------------------*/
export const fetchScoresById = async (
  req: Request<{ userId: string }>,
  res: Response,
) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const scores = await Score.find({ user: userId }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: "Scores fetched successfully",
      count: scores.length,
      scores,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

//Delete Score Controller
export const deleteScoreById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // 🔥 1. Ensure id is a string
    if (!id) {
      return res.status(400).json({ message: "Invalid score ID format" });
    }

    // 🔥 2. Validate Mongo ObjectId
    if (!mongoose.Types.ObjectId.isValid(id as string)) {
      return res.status(400).json({ message: "Invalid score ID" });
    }

    // 🔥 3. Delete
    const deleted = await Score.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Score not found" });
    }

    return res.status(200).json({
      message: "Deleted successfully",
      deleted,
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
