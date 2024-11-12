import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import { createUser } from "@/queries/users";
import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../server/models/user.schema";

export const POST = async (req: NextRequest) => {
  await mongoose.connect(connectionDb);
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "don't get the user Data" })
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "Already User Exist" }),
        { status: 409 }
      );
    }

    const newUser = {
      name,
      password,
      email,
    };

    await createUser(newUser);
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(`Error while user Registering ${err}`, {
      status: 500,
    });
  }
};
