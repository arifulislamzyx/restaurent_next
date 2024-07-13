import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import Cart from "../../../server/models/addCart.schema";

export const POST = async (req, res) => {
  await mongoose.connect(connectionDb);

  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: "Error adding menu item" });
  }
};
