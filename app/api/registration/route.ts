import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { createUser } from "@/queries/users";
import { NextResponse } from "next/server";
import { User } from "../../../server/models/user.schema";

export const POST = async (req) => {
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

    const hashPassword = await bcrypt.hash(password, 5);

    const newUser = {
      name,
      password: hashPassword,
      email,
    };

    await createUser(newUser);
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
