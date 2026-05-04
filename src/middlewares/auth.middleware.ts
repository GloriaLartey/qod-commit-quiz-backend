import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import type { IUser } from "../models/User.js";
import config from "../config/config.js";


const JWT_SECRET = config.auth.jwt_secret
// Extend Request to include authenticated user
export interface AuthRequest extends Request {
  user?: IUser;
}

/* ----------------- JWT AUTHENTICATION MIDDLEWARE ----------------- */
interface JwtPayload {
  id: string;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    // 🔒 Check header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // 🎟 Extract token
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // 🔑 Ensure JWT secret exists
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    // 🔍 Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    // 🔎 Find user (exclude password!)
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // ✅ Attach safe user object
    req.user = user;

    next();
  } catch (error: any) {
    console.error("Auth error:", error.message);

    return res.status(401).json({ message: "Unauthorized" });
  }
};