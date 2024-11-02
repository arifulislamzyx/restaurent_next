import mongoose from "mongoose";
import connectionDb from "@/lib/db.connection";
import { NextRequest, NextResponse } from "next/server";
import Cart from "../../../server/models/addCart.schema";

export async function DELETE(req: NextRequest) {
  await mongoose.connect(connectionDb);

  try {
    const { itemId, userEmail } = await req.json();
    const deletedItem = await Cart.findOneAndDelete({
      "items._id": itemId,
      email: userEmail,
    });
    if (!deletedItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(deletedItem);
  } catch (error) {
    console.error("Error while deletin items", error);
    return NextResponse.json(
      {
        message: "Server Error While Deleting the items",
      },
      { status: 500 }
    );
  }
}
