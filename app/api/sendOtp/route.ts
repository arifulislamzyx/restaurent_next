import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { OTP } from "../../../server/models/otp.schema";
import { SendOtpEmail } from "@/lib/resend";

export const POST = async (req: NextRequest) => {
  await mongoose.connect(connectionDb);

  try {
    const { email, otp } = await req.json();

    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    const newOtp = { email, otp, expiresAt: otpExpiry };

    await OTP.create(newOtp);
    await SendOtpEmail({ email, otp });
    return new NextResponse("OTP Send Succefully", { status: 201 });
  } catch (err) {
    return new NextResponse(`Error while Sending OTP ${err}`, {
      status: 500,
    });
  }
};
