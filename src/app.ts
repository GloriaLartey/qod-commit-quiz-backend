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

app.use(
  cors({
    origin: "http://localhost:5173",
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
