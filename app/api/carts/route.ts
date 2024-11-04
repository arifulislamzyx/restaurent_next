import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import Cart from "../../../server/models/addCart.schema";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const POST = async (req) => {
  await mongoose.connect(connectionDb);

  const { items, email } = await req.json();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (token.id) {
    try {
      const existingItem = await Cart.findOne({
        email,
        "items._id": items._id,
      });

      if (existingItem) {
        return NextResponse.json(
          { message: "This item is Already exist" },
          {
            status: 409,
          }
        );
      }

      const cartItem = new Cart({ items, email });
      await cartItem.save();
      return NextResponse.json(cartItem, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Error While Adding Cart" },
        { status: 500 }
      );
    }
  }
};
