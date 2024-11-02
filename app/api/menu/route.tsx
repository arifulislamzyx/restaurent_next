import Menu from "../../../server/models/menu.schema";
import mongoose from "mongoose";
import connectionDb from "@/lib/db.connection";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  await mongoose.connect(connectionDb);
  const menuItems = await Menu.find();

  menuItems.find((data) => data._id === data._id);

  return Response.json(menuItems);
};
