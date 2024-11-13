import connectionDb from "@/lib/db.connection";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ContactEmail } from "../../../server/models/contactEmail.schema";
import { SendContactEmail } from "@/lib/resend";

export const POST = async (req: NextRequest) => {
  await mongoose.connect(connectionDb);

  try {
    const { email, subject, message } = await req.json();

    console.log("contact Email", email, subject, message);

    const newMessage = {
      email,
      subject,
      message,
    };

    await ContactEmail.create(newMessage);
    await SendContactEmail({ email, subject, message });
    return new NextResponse("Email Send Succefully", { status: 201 });
  } catch (err) {
    return new NextResponse(`Error while Sending Mail ${err}`, {
      status: 500,
    });
  }
};
