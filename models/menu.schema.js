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
  name: String,
  recipe: String,
  category: String,
  image: String,
  price: Number,
});

mongoose.models = {};

var User = mongoose.model("Menu", product);

export default User;
