import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
  saveScore,
  fetchScore,
  fetchQuizByCategory,
  fetchScoresById,
  deleteScoreById,
} from "../controllers/quiz.controllers.js";

const router = express.Router();

// POST: Route to save score for authenticated user
router.post("/score", authenticate, saveScore);

// GET: Route to fetch authenticated user's scores
router.get("/score", authenticate, fetchScore);

// GET: Route to fetch quiz questions by category
router.get("/:category", fetchQuizByCategory);

// //Get: Route to fetch user scores by id
router.get("/score/:userId", fetchScoresById);

//Delete score by Id
router.delete("/score/:id", authenticate, deleteScoreById);

export default router;
