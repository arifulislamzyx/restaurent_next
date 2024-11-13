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
  stripePaymentIntentId: { type: String },
  email: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

export const MakePayment =
  mongoose.models.MakePayment || mongoose.model("MakePayment", OrderSchema);
