import mongoose from "mongoose";

var Schema = mongoose.Schema;

var addProduct = new Schema({
  _id: String,
  name: String,
  recipe: String,
  category: String,
  image: String,
  price: Number,
});

mongoose.modals = {};

var Cart = mongoose.model("Cart", addProduct);

export default Cart;