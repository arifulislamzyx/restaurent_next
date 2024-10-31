import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import Cart from "../../../server/models/addCart.schema";

export const GET = async (req) => {
  await mongoose.connect(connectionDb);

  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  if (!email) {
    return NextResponse.json(
      { error: "Email not Found in token" },
      { status: 401 }
    );
  }

  try {
    const cartItems = await Cart.find({ email });

    if (!cartItems) {
      return NextResponse.json(
        { message: "No cart Items Found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ cartItems }, { status: 200 });
  } catch (error) {
    console.error("Error Retriving Cart Items ", error);
    return NextResponse.json(
      { error: " Faild to retrive cart items" },
      { status: 500 }
    );
  }
};
