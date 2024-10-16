import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import Cart from "../../../server/models/addCart.schema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await mongoose.connect(connectionDb);

  const { items, email } = await req.json();

  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (token) {
    try {
      const existingItem = await Cart.findOne({
        email,
        "items._id": items._id,
      });

      if (existingItem) {
        return NextResponse.json(
          { message: "This item is Already Exist" },
          {
            status: 409,
          }
        );
      }
      const cartItem = new Cart({ items, email });
      await cartItem.save();
      return NextResponse.json(cartItem, { status: 200 });
    } catch (error) {
      console.error("error while add to cart");
    }
  }
};
