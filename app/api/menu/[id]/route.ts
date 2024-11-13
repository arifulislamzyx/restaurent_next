import mongoose from "mongoose";
import connectionDb from "@/lib/db.connection";
import { NextRequest } from "next/server";
import { Menu } from "../../../../server/models/menu.schema";

export const GET = async (req: NextRequest) => {
  await mongoose.connect(connectionDb);
  const id = req.nextUrl.pathname.split("/").pop();

  try {
    const menuItems = await Menu.findById(id);

    if (!menuItems) {
      return new Response(JSON.stringify({ message: "Menu item not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(menuItems), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
