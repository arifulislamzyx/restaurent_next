import mongoose from "mongoose";

const ContactEmailSchema = new mongoose.Schema({
  email: { type: String, require: true },
  subject: { type: String, require: true },
  message: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

export const ContactEmail =
  mongoose.models.ContactEmail ||
  mongoose.model("ContactEmail", ContactEmailSchema);
