import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import Cart from "../../../server/models/addCart.schema";

export const GET = async (req: NextRequest) => {
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
    return NextResponse.json(
      { error: " Faild to retrive cart items" },
      { status: 500 }
    );
  }
};
