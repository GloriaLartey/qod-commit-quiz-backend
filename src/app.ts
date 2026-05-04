import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import quizRoutes from "./routes/quiz.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();
app.use(morgan("dev"));

const allowedOrigins = [
  "http://localhost:5173",
  "qod-commit-quiz-frontend.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Backend is running" });
// });

// ✅ test route
app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "Backend connected from app.ts!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

// MUST BE LAST
app.use(errorHandler);

export default app;
