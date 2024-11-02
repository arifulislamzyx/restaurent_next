"use client";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import ConvertCurrency from "@/lib/convertCurrency";
import Checkout from "./Checkout";
import { useSearchParams } from "next/navigation";
import { ICart } from "@/types/cart";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_SRTIPE);

const Payment = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: ConvertCurrency(amount, 100),
          currency: "usd",
        }}
      >
        <Checkout amount={amount} />
      </Elements>
    </div>
  );
};

export default Payment;
