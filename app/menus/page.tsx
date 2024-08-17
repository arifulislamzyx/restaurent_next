"use client";
import Swal from "sweetalert2";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RootSate from "@/Redux/Store/Store";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Menus from "@/sections/menus/Menus";

type RootSate = any;

const Page = () => {
  const [cartData, setCartData] = useState();
  const router = useRouter();
  const { getToken, userId } = useAuth();
  const [showAll, setShowAll] = useState(false);
  const [textLength, setTextLength] = useState(40);
  const { menu, isLoading, isError, error } = useSelector(
    (state: RootSate) => state.menus
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const truncateText = (text: String, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTextLength(20);
      } else {
        setTextLength(40);
      }
    };

    handleResize();
  }, []);

  const handleAddItems = async (items) => {
    setCartData(items);
    if (userId) {
      try {
        const token = await getToken();
        const res = await axios.post(
          "api/carts",
          { userId, items },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("addCart", res);
      } catch (error) {
        console.error("Error adding cart item:", error);
      }
    } else {
      Swal.fire({
        title: "Please Login to Order Products",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      });
    }
  };

  return (
    <div>
      <Menus
        menu={menu}
        handleAddItems={handleAddItems}
        cartData={cartData}
        textLength={textLength}
        setShowAll={setShowAll}
        showAll={showAll}
        router={router}
        isLoading={isLoading}
        isError={isError}
        error={error}
        truncateText={truncateText}
      />
    </div>
  );
};

export default Page;
