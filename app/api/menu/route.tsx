import Menu from "../../../server/models/menu.schema";
import mongoose from "mongoose";
import connectionDb from "@/libs/db.connection";

export const GET = async (request: Request) => {
  await mongoose.connect(connectionDb);
  const menuItems = await Menu.find();

  return Response.json(menuItems);
};
