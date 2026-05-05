import nodemailer from "nodemailer";

export const sendMail = async (to: string, subject: string, html: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000, // 10s timeout
      greetingTimeout: 10000,
      socketTimeout: 10000,
      tls: {
        rejectUnauthorized: false, // helps on some cloud envs
      },
    });

    await transporter.verify(); // check connection (important)

    await transporter.sendMail({
      from: `"Quiz App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Email failed");
  }
};
