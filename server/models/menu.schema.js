// import mongoose from "mongoose";

// const MenuSchema = mongoose.Schema({
//   name: String,
//   recipe: String,
//   category: String,
//   image: String,
//   price: Number,
// });

// const Menu = mongoose.model("menu", MenuSchema);

// export default Menu;

import mongoose from "mongoose";

var Schema = mongoose.Schema;

var product = new Schema({
  _id: String,
  name: String,
  recipe: String,
  category: String,
  image: String,
  price: Number,
});

mongoose.models = {};

var Menu = mongoose.model("Menu", product);

export default Menu;
