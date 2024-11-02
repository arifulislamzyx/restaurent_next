import mongoose from "mongoose";
import connectionDb from "@/lib/db.connection";
import Menu from "../../../../server/models/menu.schema";
import { NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await mongoose.connect(connectionDb);

  const { id } = params;

  try {
    const menuItems = await Menu.findById(id);

    if (!menuItems) {
      return new Response(JSON.stringify({ message: "Menu item not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(menuItems), { status: 200 });
  } catch (error) {
    console.error("Error fetching menu item:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
