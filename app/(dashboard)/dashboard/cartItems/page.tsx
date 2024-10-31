"use client";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IACartArray, IACartwithEmail, ICart } from "@/types/cart";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    carts: cartItems,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.carts);
  const { data: session, status } = useSession();

  console.log("items", cartItems);

  const userEmail = session?.user.email;

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchCartItems(userEmail));
    }
  }, [dispatch, userEmail]);

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

  return (
    <div className="grid grid-cols-1 gap-4">
      {cartItems?.cartItems?.map((item: IACartArray) => (
        <div key={item._id}>
          <div className="flex items-center justify-evenly gap-6  bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4">
            <Image
              className=" object-cover rounded"
              src={item.items.image}
              alt={item.items.name}
              width={30}
              height={30}
            />

            <h2 className="text-lg w-full font-semibold text-gray-800">
              {item.items.name}
            </h2>
            <p className="text-gray-600 mt-1">${item.items.price}</p>

            <button
              className="mt-4 w-3/4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => handleDelete(item?.items._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
