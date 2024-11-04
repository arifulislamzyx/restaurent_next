"use client";
import Loading from "@/components/buttons/loading";
import ConvertCurrency from "@/lib/convertCurrency";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { IACartwithEmail } from "@/types/cart";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkout = ({ amount }: { amount: any }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    carts: { cartItems },
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.carts);
  const { data: session, status } = useSession();

  const userEmail = session?.user.email;

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchCartItems(userEmail));
    }
  }, [dispatch, userEmail]);

  const getCartItems: any = useMemo(() => {
    return cartItems?.map((item: IACartwithEmail) => item.items);
  }, [cartItems]);

  useEffect(() => {
    if (amount > 0) {
      try {
        axios
          .post(
            "/api/create-payment-intent",
            {
              amount: ConvertCurrency(amount, 100),
              items: getCartItems,
              email: userEmail,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            setClientSecret(res.data.clientSecret);
          })
          .catch((err) => console.error("payment res Error", err));
      } catch (error) {
        console.error("Payment error:", error);
      }
    }
  }, [amount, getCartItems, userEmail, setClientSecret]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);

      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      alert("Payment Success");
    }
    setLoading(false);
  };

  if (!stripe || !elements || !clientSecret) {
    return (
      <p className="flex justify-center h-screen">
        <Loading />
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-3/4 mx-auto p-2 rounded-md"
    >
      <h3 className="w-full p-5 rounded-md mb-2 text-white text-center bg-gradient-to-r from-orange-500 to-violet-700 animate-slideBackground ">
        Payment Page
      </h3>
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white p-5 w-full bg-blue-500 mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default Checkout;
