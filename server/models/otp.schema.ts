import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: { type: String, require: true },
  otp: { type: String, require: true },
  expiresAt: { type: Date, require: true },
});

export const OTP = mongoose.models.OTP || mongoose.model("OTP", OtpSchema);
