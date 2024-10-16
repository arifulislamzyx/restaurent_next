import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { createClerkClient } from "@clerk/clerk-sdk-node";

export const GET = async (req) => {
  await mongoose.connect(connectionDb);

  const authHeader = req.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json({ error: "No Way" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Wait a Sec" }, { status: 401 });
  }

  try {
    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });
    const verifyResult = await clerkClient.verifyToken(token);
    // if (!verifyResult || !verifyResult.claims) {
    //   return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    // }
    const userId = verifyResult.sub;

    const user = await clerkClient.users.getUser(userId);

    const email = user.emailAddresses[0]?.emailAddress;

    return NextResponse.json(
      { message: "Token decoded successfully", email },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error decoding token:", error);
    return NextResponse.json(
      { error: "Failed to decode token" },
      { status: 401 }
    );
  }
};
