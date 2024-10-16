"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "@/Redux/Slice/CartSlice";
import { useAuth, useUser } from "@clerk/nextjs";
import { AppDispatch } from "@/Redux/Store/Store";

type RootState = any;

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { getToken } = useAuth();

  useEffect(() => {
    const loadCartItems = async () => {
      const token = await getToken();

      if (token) {
        dispatch(fetchCartItems(token));
      }
    };

    loadCartItems();
  }, [dispatch, getToken]);

  return <div>Carts Data Chek</div>;
};

export default Page;
