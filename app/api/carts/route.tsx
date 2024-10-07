import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import Cart from "../../../server/models/addCart.schema";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export const POST = async (req) => {
  await mongoose.connect(connectionDb);

  const { userId, items } = await req.json();
  // console.log("User ID", { userId });
  // console.log("Req Body", { userId, items });

  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const token = authHeader.split(" ")[1];
  console.log("bb", token);
  // const session = await getAuth(token);
  // console.log("session", session);

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (token) {
    // const existingCart = await Cart.findOne({
    //   userId,
    //   "items.productId": items[0].productId,
    // });

    // if (existingCart) {
    //   return NextResponse.json(
    //     { message: "items already Exist" },
    //     { status: 200 }
    //   );
    // }
    const cartItem = new Cart({ userId, items });
    await cartItem.save();
    return NextResponse.json(cartItem, { status: 200 });
  }
};
