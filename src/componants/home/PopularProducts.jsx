"use client";
import useMenus from "@/Hooks/useMenus";
import React, { useState } from "react";
import PopularProductCard from "./utils/PopularProductCard";
import { IoBagAdd } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const PopularProducts = () => {
  const { menuItems } = useMenus();
  const [showAll, setShowAll] = useState(false);
  const textLength = 40;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  if (!Array.isArray(menuItems)) {
    return <div>No product Load</div>;
  }
  console.log(menuItems);
  return (
    <div className="relative mt-5 py-5">
      <h2 className=" font-bold text-base ml-20 md:text-xl lg:text-2xl ">
        Most Popular Product
      </h2>
      <div className="grid grid-cols-1 gap-3 px-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8 mx-4 md:px-14 lg:px-16 mt-5">
        {menuItems.slice(0, showAll ? menuItems.length : 6).map((items) => (
          <div key={items._id} className="flex gap-2">
            <img
              src={items.image}
              width={100}
              height={50}
              alt={items.name}
              className="rounded-s-xl"
            ></img>
            <div className="">
              <div>
                <h3 className="text-sm font-bold md:text-base lg:text-lg mb-2">
                  {items.name}
                </h3>
                <p>{truncateText(items.recipe, textLength)}</p>
              </div>
              <div className="flex justify-between px-3 mt-1">
                <p className="font-bold">${items.price}</p>
                <p className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1">
                  <IoBagAdd></IoBagAdd>Add
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {menuItems.length > 6 && (
        <div className="absolute right-24 top-0 font-bold text-base ml-20 md:text-xl lg:text-2xl hover:bg-orange-400 hover:rounded-full p-1">
          <Link href={"/menus"}>
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PopularProducts;
