"use client";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { useSession } from "next-auth/react";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IACartwithEmail, ICart } from "@/types/cart";
import Image from "next/image";
import axios from "axios";
import Button from "@/components/buttons/Button";
import { useRouter } from "next/navigation";
import Loading from "@/components/buttons/loading";
import { Trash2 } from "lucide-react";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    carts: { cartItems },
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

  const getCartItems = useMemo(() => {
    return cartItems?.map((item: IACartwithEmail) => item.items);
  }, [cartItems]);

  const total = getCartItems?.reduce(
    (acc, item) => acc + item.price * (item.quantity || 0),
    0
  );

  const handleDelete = async (itemId: string) => {
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

  const handlePayment = () => {
    router.push(`/dashboard/payment?amount=${total}`);
  };

  if (isLoading) {
    return (
      <p className="flex items-center justify-center h-screen">
        <Loading />
      </p>
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

  return (
    <div className="flex flex-col md:flex-row gap-4  py-5">
      <div className="w-full ">
        <p className="py-4 text-base md:text-lg border-b-2 border-black mb-4">
          Cart Items:
        </p>

        <div className="grid grid-cols-1 gap-4">
          {getCartItems?.map((item) => (
            <div key={item._id}>
              <div className="flex items-center justify-evenly gap-6  bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                <Image
                  className=" object-cover rounded"
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                />

                <h2 className="text-lg w-full text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mt-1">${item.price}</p>

                <Button
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => handleDelete(item?._id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/6 ">
        {total == 0 ? (
          <Loading />
        ) : (
          <div className="bg-slate-50 shadow-2xl rounded-xl p-6 space-y-4 text-center border-2">
            <p className="text-lg flex items-center justify-between">
              <span>Sub Total:</span>
              <span>{total}$</span>
            </p>
            <p className="text-lg flex items-center justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </p>
            <p className="text-lg  flex items-center justify-between">
              <span>Total:</span>
              <span>{total}$</span>
            </p>

            <Button
              onClick={handlePayment}
              className="px-4 py-2 bg-orange-500 rounded text-white"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
