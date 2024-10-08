import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import Cart from "../../../server/models/addCart.schema";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export const POST = async (req) => {
  await mongoose.connect(connectionDb);

  const { userId, items } = await req.json();

  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (token) {
    const cartItem = new Cart({ userId, items });
    await cartItem.save();
    return NextResponse.json(cartItem, { status: 200 });
  }
};
