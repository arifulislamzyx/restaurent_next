import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { productAnm, showSlideProduct } from "@/animation/varients";
import RootSate from "@/Redux/Store/Store";
import ProductSkeliton from "@/sections/utils/ProductSkeliton";
import ProductCard from "@/components/product-card";

type RootSate = any;

interface Props {
  initialItemsShow: number;
}

const FeaturedItems: FC<Props> = ({ initialItemsShow }) => {
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

  const handleAddCartPopUp = (menuId) => {
    setShowAddCartPopup(!showAddCartPopup);
  };

  const handleClosePopup = () => {
    setShowAddCartPopup(false);
  };
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
        className="grid grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-8 mt-5"
      >
        {menu
          .slice(0, showAll ? menu.length : initialItemsShow)
          .map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
              recipe={product.recipe}
            />
          ))}
      </motion.div>

      <div>
        {menu.length > 12 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 m-4 sm:ml p-2 rounded-xl text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600 "
            >
              {showAll ? "Show Less" : "Show More.."}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedItems;
