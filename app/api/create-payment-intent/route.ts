import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import connectionDb from "@/lib/db.connection";
import MakePayment from "../../../server/models/makePayment.schema";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function POST(req: NextRequest) {
  await mongoose.connect(connectionDb);

  try {
    const { amount, items, email } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      receipt_email: email,
    });

    const paymentData = new MakePayment({ amount, email, items });
    await paymentData.save();

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error", error);
    return NextResponse.json(
      { error: `Internal Server Error ${error}` },
      { status: 500 }
    );
  }
}
