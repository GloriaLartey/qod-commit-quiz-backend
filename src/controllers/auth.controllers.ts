import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { sendMail } from "../utils/sendmail.js";
import type { Request, Response } from "express";
import config from "../config/config.js";
import User from "../models/User.js";
import { allowedOrigins } from "../app.js";

const JWT_SECRET = config.auth.jwt_secret;

/* =========================
   SIGN UP
========================= */

interface SignUpBody {
  username: string;
  email: string;
  password: string;
}

export const signUp = async (
  req: Request<{}, {}, SignUpBody>,
  res: Response,
) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Username, email, and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const normalizedEmail = email.toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   LOGIN
========================= */

interface LoginBody {
  identifier: string;
  password: string;
}

export const logIn = async (req: Request<{}, {}, LoginBody>, res: Response) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        message: "Email/Username and password are required",
      });
    }

    const normalizedIdentifier = identifier.toLowerCase();

    const user = await User.findOne({
      $or: [
        { email: normalizedIdentifier },
        { username: normalizedIdentifier },
      ],
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, config.auth.jwt_secret, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

//   FORGOT PASSWORD
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    // Always return same response (security best practice)
    if (!user) {
      return res.status(200).json({
        message: "If the email exists, a reset link has been sent",
      });
    }

    // 🔐 generate token
    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    const expiryTime = Date.now() + 15 * 60 * 1000;

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = new Date(expiryTime);

    await user.save();

    // 🔗 reset link
    const resetLink = `allowedOrigins/reset-password/${resetToken}`;

    // 📧 EMAIL TEMPLATE
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>Password Reset Request</h2>
        <p>You requested to reset your password.</p>
        <p>Click the button below to proceed:</p>

        <a href="${resetLink}" 
           style="
             display:inline-block;
             padding:12px 20px;
             background:#22c55e;
             color:#fff;
             text-decoration:none;
             border-radius:6px;
             margin-top:10px;
           ">
          Reset Password
        </a>

        <p style="margin-top:20px; font-size:12px; color:gray;">
          This link expires in 15 minutes.
        </p>
      </div>
    `;

    // 📩 SEND EMAIL
    await sendMail(user.email, "Reset Your Password", html);

    return res.status(200).json({
      message: "If the email exists, a reset link has been sent",
    });
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
      error:
        process.env.NODE_ENV === "development" || "production"
          ? error.message
          : undefined,
    });
  }
};

//   RESET PASSWORD
interface ResetParams {
  token: string;
}

interface ResetBody {
  password: string;
}

export const resetPassword = async (
  req: Request<ResetParams, {}, ResetBody>,
  res: Response,
) => {
  try {
    let { token } = req.params;
    const { password } = req.body;

    if (Array.isArray(token)) {
      token = token[0];
    }

    if (!token || !password) {
      return res.status(400).json({
        message: "Token and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired reset token",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    return res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
