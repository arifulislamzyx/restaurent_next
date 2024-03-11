"use client";
import useMenus from "@/Hooks/useMenus";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { motion } from "framer-motion";
import { productAnm } from "@/animation/varients";
import { showSlideProduct } from "@/animation/varients";
import UseMenus from "@/Hooks/useMenus";
// import { useDispatch, useSelector } from "react-redux";
// import { data } from "autoprefixer";

const MenuItems: React.FC = () => {
  // const dispatch = useDispatch();
  // const menuData = useSelector((data) => data);
  // console.log("redux data", menuData);
  const { menuItems } = UseMenus();
  console.log("PRODUCT IS HERE", menuItems);

  const [textLength, setTextLength] = useState(40);
  const [showAll, setShowAll] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.legth <= maxLength) {
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

  if (!Array.isArray(menuItems)) {
    return <div>No product Load</div>;
  }
  return (
    <div>
      <h2 className="font-bold text-base ml-8 md:ml-20 lg:ml-28 md:text-xl lg:text-2xl ">
        Featured Items
      </h2>
      <motion.div
        variants={productAnm}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-8 mx-4 md:px-14 lg:px-24 mt-5"
      >
        {/* .slice(0, showAll ? menuItems.length : 8) */}
        {menuItems.map((items: any) => (
          <motion.div
            variants={showSlideProduct}
            key={items._id}
            className="max-w-[450px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all "
          >
            <Image
              alt={items.name}
              width={300}
              height={150}
              src={items.image}
              className="rounded-t-xl transition duration-700 ease-in-out transform hover:scale-105"
            ></Image>
            <div className="py-5">
              <div className="px-3">
                <h4 className="text-sm font-bold md:text-base lg:text-lg mb-2">
                  {items.name}
                </h4>
                <p className="mb-2">{truncateText(items.recipe, textLength)}</p>
              </div>
              <div className="flex justify-between px-3">
                <p className="font-bold">${items.price}</p>
                <button className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1">
                  <IoBagAdd></IoBagAdd>Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {menuItems.length > 8 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            // variant="contained"
            className="bg-blue-600 m-4 sm:ml text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600"
          >
            {showAll ? "Show Less" : "Show More.."}
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItems;
