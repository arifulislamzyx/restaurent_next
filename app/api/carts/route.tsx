import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import Cart from "../../../server/models/addCart.schema";
import { NextResponse } from "next/server";
import { verifySessionToken } from "@clerk/nextjs/server";

export const POST = async (req) => {
  await mongoose.connect(connectionDb);

  try {
    const { userId, items } = await req.json();
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const token = authHeader.split(" ")[1];
    const session = await verifySessionToken(token);

    console.log("Bearer", token);
    console.log("userId", userId);
    console.log("Session", session);

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (token) {
      const cartItem = new Cart({ userId, items });
      await cartItem.save();
      return NextResponse.json(cartItem, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error adding menu item" },
      { status: 400 }
    );
  }
};