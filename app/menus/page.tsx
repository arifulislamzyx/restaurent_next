"use client";
import Swal from "sweetalert2";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoBagAdd } from "react-icons/io5";
import ProductSkeliton from "@/sections/utils/ProductSkeliton";
import { MenuItem } from "@/types/menuItems";
import OfferSlider from "../../src/sections/home/OfferSlider";
import { productAnm, showSlideProduct } from "@/animation/varients";
import { RootState } from "@/Redux/Store/Store";

type RootState = any;

// export type MenuItemProps = {
//   initialItemsShow: number;
// showOfferSlider: boolean;
// };
// // {
// //   initialItemsShow,
// //   showOfferSlider = true,
// // }

const MenuItems = () => {
  const [cartData, setCartData] = useState<MenuItem | null>(null);
  const router = useRouter();
  const { getToken, userId } = useAuth();
  const [showAll, setShowAll] = useState(false);
  const [textLength, setTextLength] = useState(40);
  const { menu, isLoading, isError, error } = useSelector(
    (state: RootState) => state.menus
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const truncateText = (text: string, maxLength: number) => {
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

  const handleAddItems = async (items: MenuItem) => {
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
        if (res.status == 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Items is Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
      }).then((res) => {
        if (res.isConfirmed) {
          window.location.href = "/sign-in";
        }
      });
    }
  };

  return (
    <div>
      <div className="mt-5 mx-auto items-center">
        <h2 className="font-bold text-base md:ml-2 md:text-xl lg:text-2xl mt-5">
          Featured Items
        </h2>

        <div>
          {isLoading && <ProductSkeliton />}
          {isError && <p>Error: {error}</p>}

          <motion.div
            variants={productAnm}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-8 mt-5"
          >
            {menu
              .slice(0, showAll ? menu.length : 12)
              .map((items: MenuItem) => (
                <motion.div
                  key={items._id}
                  variants={showSlideProduct}
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all max-w-[300px] overflow-hidden"
                >
                  <Image
                    width={300}
                    height={150}
                    src={items.image}
                    alt={items.name}
                    className="rounded-t-xl transition duration-700 ease-in-out transform hover:scale-105"
                  />
                  <div className="py-5">
                    <div className="px-3">
                      <Link href={`/menus/${items._id}`}>
                        <h4 className="text-sm font-bold md:text-base lg:text-lg mb-2 cursor-pointer">
                          {items.name}
                        </h4>
                      </Link>
                      <p className="mb-2">
                        {truncateText(items.recipe, textLength)}
                      </p>
                    </div>
                    <div className="flex justify-between px-3">
                      <p className="font-bold">${items.price}</p>
                      <button
                        onClick={() => handleAddItems(items)}
                        className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1"
                      >
                        <IoBagAdd /> Add
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {menu.length > 12 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-blue-600 m-4 p-2 rounded-xl text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600"
              >
                {showAll ? "Show Less" : "Show More.."}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
