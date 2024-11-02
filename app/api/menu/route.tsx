import Menu from "../../../server/models/menu.schema";
import mongoose from "mongoose";
import connectionDb from "@/lib/db.connection";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await mongoose.connect(connectionDb);
    const menuItems = await Menu.find();

    menuItems.find((data) => data._id === data._id);

    return NextResponse.json(menuItems);
  } catch (error) {
    return NextResponse.json(
      { message: "Error while getting menu items" },
      { status: 500 }
    );
  }
};
