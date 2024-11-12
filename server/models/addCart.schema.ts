import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  recipe: { type: String },
  category: { type: String },
  image: { type: String },
  price: { type: Number },
  quantity: { type: Number, required: true, default: 1 },
});

const cartSchema = new Schema({
  items: cartItemSchema,
  email: { type: String, require: true },
});

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
