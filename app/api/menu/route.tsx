import Menu from "../../../models/menu.schema";
import mongoose from "mongoose";
import connectionDb from "@/libs/db.connection";

export const GET = async (request: Request) => {
  await mongoose.connect(connectionDb);
  const menuItems = await Menu.find();
  // console.log(menuItems);

  return Response.json(menuItems);
};
