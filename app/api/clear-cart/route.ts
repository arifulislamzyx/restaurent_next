import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { Cart } from "../../../server/models/addCart.schema";

export async function POST(req: NextRequest) {
  await mongoose.connect(connectionDb);
  try {
    const { email } = await req.json();

    await Cart.deleteMany({ email });

    return NextResponse.json(
      {
        message: "All cart items deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error while deleting cart items" },
      { status: 500 }
    );
  }
}
