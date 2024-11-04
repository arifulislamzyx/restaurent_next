"use client";
import Loading from "@/components/buttons/loading";
import { clearCart } from "@/Redux/Slice/CartSlice";
import { AppDispatch } from "@/Redux/Store/Store";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

const PaymentSuccess = ({ amount }: { amount: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: session } = useSession();

  useEffect(() => {
    const userEmail = session?.user.email;

    dispatch(clearCart());

    if (userEmail) {
      axios.post("/api/clear-cart", {
        email: userEmail,
      });
    }
  }, [dispatch, session]);

  return (
    <main className="max-w-2xl  mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${amount}
        </div>
      </div>
    </main>
  );
};

const AmountFetcher = () => {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;
  return <PaymentSuccess amount={amount} />;
};

const Payment = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AmountFetcher />
    </Suspense>
  );
};

export default Payment;
