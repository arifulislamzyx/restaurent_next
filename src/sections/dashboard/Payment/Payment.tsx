"use client";
import { loadStripe } from "@stripe/stripe-js";
import React, { Suspense, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import ConvertCurrency from "@/lib/convertCurrency";
import Checkout from "./Checkout";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/ui/loading";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE as string);

const StripeWrapper = ({ amount }: { amount: number }) => {
  return (
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
  );
};

const AmountFetcher = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;
  return <StripeWrapper amount={amount} />;
};

const Payment = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AmountFetcher />
    </Suspense>
  );
};

export default Payment;
