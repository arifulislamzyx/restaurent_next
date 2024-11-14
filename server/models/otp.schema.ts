import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: { type: String, require: true },
  otp: { type: String, require: true, default: null },
  status: {
    require: true,
    type: String,
    default: "verified",
  },
});

export const OTP = mongoose.models.OTP || mongoose.model("OTP", OtpSchema);
