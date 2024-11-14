import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  otp: {
    require: true,
    type: String,
  },
  status: {
    require: true,
    type: String,
    default: "Unverified",
  },
  otpExpiresAt: {
    type: Date,
    index: { expires: "10m" },
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
