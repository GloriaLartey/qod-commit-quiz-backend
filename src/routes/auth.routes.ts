import express from "express";
import { signUp } from "../controllers/auth.controllers.js";
import { logIn } from "../controllers/auth.controllers.js";
import {
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controllers.js";

// Import middlewares and type
import { authenticate } from "../middlewares/auth.middleware.js";
import type { AuthRequest } from "../middlewares/auth.middleware.js";

const router = express.Router();

/* ----------------- SIGNUP ROUTE ----------------- */
router.post("/signup", signUp);

/* ----------------- LOGIN ROUTE ----------------- */
router.post("/login", logIn);

// Get current authenticated user
router.get("/me", authenticate, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
