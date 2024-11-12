import mongoose from "mongoose";

const Schema = mongoose.Schema;

const product = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  recipe: { type: String },
  category: { type: String },
  image: { type: String },
  price: { type: Number },
});

const Menu = mongoose.models.Menu || mongoose.model("Menu", product);

export default Menu;
