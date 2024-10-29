import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await mongoose.connect(connectionDb);

  const authHeader = req.headers.get("authorization");
  console.log("authH", authHeader);

  if (!authHeader)
    return NextResponse.json({ error: "No Way" }, { status: 401 });

  const token = authHeader.split(" ")[1];
  console.log(token);

  if (!token) {
    return NextResponse.json({ error: "Wait a Sec" }, { status: 401 });
  }

  try {
    console.log("logged before verify token");

    const clerkClient = createClerkClient({
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    console.log("log after clientClark", clerkClient.verifyToken(token));

    return NextResponse.json(
      { message: "Token decoded successfully" },
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
