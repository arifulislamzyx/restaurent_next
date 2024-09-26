import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { productAnm, showSlideProduct } from "@/animation/varients";
import ProductSkeliton from "./ProductSkeliton";
import RootSate from "@/Redux/Store/Store";
import axios from "axios";

type RootSate = any;

const MenuCard = () => {
  const [showAll, setShowAll] = useState(false);
  const [textLength, setTextLength] = useState(40);
  const [showAddCartPopup, setShowAddCartPopup] = useState(false);
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

  return (
    <div>
      <div>
        {isLoading && <ProductSkeliton />}
        {isError && <p>Error: {error}</p>}
      </div>
      <motion.div
        variants={productAnm}
        initial="hidden"
        animate="show"
        whileInView={"show"}
        className="grid grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-8 mx-4 md:px-14 lg:px-16 mt-5"
      >
        {menu.slice(0, showAll ? menu.length : 8).map((items) => (
          <motion.div
            variants={showSlideProduct}
            initial={"hidden"}
            whileInView={"show"}
            key={items._id}
            className="w-300 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all max-w-[450px] overflow-hidden"
          >
            <Image
              width={300}
              height={150}
              src={items.image}
              alt={items.name}
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
                <button
                  // onClick={handleAddItems}
                  className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1"
                >
                  <IoBagAdd></IoBagAdd>Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div>
        {menu.length > 12 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 m-4 sm:ml p-2 rounded-xl text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600 hover:transition-all"
            >
              {showAll ? "Show Less" : "Show More.."}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
