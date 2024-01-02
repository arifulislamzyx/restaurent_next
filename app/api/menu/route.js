import Menu from "../../../models/menu.schema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionDb } from "@/libs/db.connection";

export const GET = async (req, res) => {
  try {
    await mongoose.connect(connectionDb);
    const menuItems = await Menu.find();
    console.log(menuItems);

    return NextResponse.json(menuItems);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "Internal Error" });
  }
};
