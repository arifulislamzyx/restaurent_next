import mongoose from "mongoose";

const product = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  recipe: { type: String },
  category: { type: String },
  image: { type: String },
  price: { type: Number },
});

export const Menu = mongoose.models.Menu || mongoose.model("Menu", product);
