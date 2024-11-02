"use client";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IACartArray, IACartwithEmail, ICart } from "@/types/cart";
import Image from "next/image";
import axios from "axios";
import Button from "@/components/buttons/Button";
import Payment from "@/sections/dashboard/Payment/Payment";
import { useRouter } from "next/navigation";
import ConvertCurrency from "@/lib/convertCurrency";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    carts: cartItems,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.carts);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState();

  const userEmail = session?.user.email;

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchCartItems(userEmail));
    }
  }, [dispatch, userEmail]);

  const getCartItems: any = cartItems?.cartItems?.map(
    (item: IACartwithEmail) => item.items
  );

  const total = getCartItems?.reduce(
    (acc, item) => acc + item.price * (item.quantity || 0),
    0
  );

  useEffect(() => {
    setTotalAmount(ConvertCurrency(total, 100));
  }, [total]);

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete("/api/deleteCartItem", {
        data: {
          itemId,
          userEmail,
        },
      });

      if (response.status === 200) {
        dispatch(fetchCartItems(userEmail));
      } else {
        console.error("Failed to delete item:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    axios
      .post(
        "/api/create-payment-intent",
        {
          amount: ConvertCurrency(total, 100),
          items: getCartItems,
          email: userEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res)
      .catch((err) => console.error("payment res Error", err));
  }, []);

  const handlePayment = () => {
    router.push(`/dashboard/payment?amount=${total}`);
  };

  if (isLoading) {
    return (
      <p className="flex items-center justify-center h-screen">Loading...</p>
    );
  }

  if (isError) {
    return <p className="text-red-500">Error fetching cart items.</p>;
  }

  if (total === 0) {
    return (
      <p className="flex items-center justify-center h-screen">
        Your cart is empty!
      </p>
    );
  }

  <Payment amount={totalAmount} />;

  return (
    <div className="grid grid-cols-1 gap-4">
      {getCartItems?.map((item: ICart) => (
        <div key={item._id}>
          <div className="flex items-center justify-evenly gap-6  bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4">
            <Image
              className=" object-cover rounded"
              src={item.image}
              alt={item.name}
              width={30}
              height={30}
            />

            <h2 className="text-lg w-full font-semibold text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-600 mt-1">${item.price}</p>

            <button
              className="mt-4 w-3/4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => handleDelete(item?._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {total == 0 ? (
        <p></p>
      ) : (
        <div className="flex justify-end gap-5 items-center mr-10">
          <p className="text-lg font-semibold">Sub Total: {total}$</p>

          <Button
            onClick={handlePayment}
            className="px-4 py-2 bg-orange-500 rounded text-white"
          >
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
