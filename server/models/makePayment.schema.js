import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  items: [
    {
      _id: { type: String, required: true },
      name: { type: String, required: true },
      recipe: { type: String },
      category: { type: String },
      image: { type: String },
      price: { type: Number },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
  amount: { type: Number, require: true },
  paymentStatus: { type: String, default: "pending" },
  stripePaymentIntentId: { type: String, require: true },
  email: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.MakePayment ||
  mongoose.model("MakePayent", OrderSchema);
