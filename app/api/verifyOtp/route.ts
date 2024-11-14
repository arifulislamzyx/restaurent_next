import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../server/models/user.schema";

export const POST = async (req: NextRequest) => {
  await mongoose.connect(connectionDb);

  try {
    const { email, otp } = await req.json();

    const user = await User.findOne({ email });

    if (!user || user.otp !== otp) {
      return NextResponse.json({
        status: 400,
        message: "Invalid otp or user not found",
      });
    }

    const updateUserStatus = {
      email,
      status: "verified",
      otp: null,
    };

    const userDpdated = await User.findOneAndUpdate(
      { email },
      { $set: updateUserStatus },
      { new: true }
    );
    return new NextResponse(JSON.stringify(userDpdated), { status: 201 });
  } catch (err) {
    return new NextResponse(`Unable to Verify OTP ${err}`, {
      status: 500,
    });
  }
};
