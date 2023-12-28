import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // recipe: String,
  // image: {
  //   type: String,
  //   required: true,
  // },
  // category: {
  //   type: String,
  //   required: true,
  // },
  // price: {
  //   type: Number,
  //   required: true,
  // },
  name: String,
  // recipe: String,
  // image: String,
  // category: String,
  price: Number,
});

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
