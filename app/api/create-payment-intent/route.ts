import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import connectionDb from "@/lib/db.connection";
import { MakePayment } from "../../../server/models/makePayment.schema";

const stripe = new Stripe(process.env.Res_Stripe_Secret_Key || "");

export async function POST(req: NextRequest) {
  await mongoose.connect(connectionDb);

  try {
    const { amount, items, email } = await req.json();
    if (!amount || typeof amount !== "number" || amount <= 0) {
      throw new Error("Invalid amount provided");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      receipt_email: email,
    });

    const paymentData = new MakePayment({
      amount,
      email,
      items,
    });
    await paymentData.save();

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return NextResponse.json(
      { error: "Error while creating payemnt intent" },
      { status: 500 }
    );
  }
}
