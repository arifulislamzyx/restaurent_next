"use client";
import ConvertCurrency from "@/lib/convertCurrency";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Checkout = ({ amount }: { amount: any }) => {
  const stripe = useStripe();
  const elemets = useElements();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return <div></div>;
};

export default Checkout;
