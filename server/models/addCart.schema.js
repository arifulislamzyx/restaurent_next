// import mongoose from "mongoose";

// var Schema = mongoose.Schema;

// var addProduct = new Schema({
//   _id: String,
//   name: String,
//   recipe: String,
//   category: String,
//   image: String,
//   price: Number,
// });

// mongoose.modals = {};

// var Cart = mongoose.models.Cart || mongoose.model("Cart", addProduct);

// export default Cart;

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  recipe: { type: String },
  category: { type: String },
  image: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const cartSchema = new Schema({
  userId: { type: String, required: true },
  items: [cartItemSchema],
});

mongoose.models = {};

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
