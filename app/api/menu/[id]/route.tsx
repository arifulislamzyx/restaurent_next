import mongoose from "mongoose";
import connectionDb from "@/libs/db.connection";
import Menu from "../../../../server/models/menu.schema";

export const GET = async (
  request: Request,
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
