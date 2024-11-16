import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../server/models/user.schema";
import { SendOtpEmail } from "@/lib/resend";

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
    const otp = Math.floor(10000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    const newUser = {
      name,
      password,
      email,
      otp,
      status: "Unverified",
      otpExpiresAt: otpExpiry,
    };

    await SendOtpEmail({ email, otp });
    return new NextResponse(JSON.stringify(newUser), { status: 201 });
  } catch (err) {
    return new NextResponse(`Error while user Registering ${err}`, {
      status: 500,
    });
  }
};
