"use client";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { MenuItem } from "@/types/menuItems";
import { productAnm } from "@/animation/varients";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { useSession } from "next-auth/react";
import MenuCard from "@/components/menu/MenuCard";
import Button from "@/components/buttons/Button";
import ProductSkeliton from "@/components/ui/Skeleton/ProductSkeleton";

const MenuItems = () => {
  const [showAll, setShowAll] = useState(false);
  const [textLength, setTextLength] = useState(40);
  const { data: session } = useSession();
  const email = session?.user?.email;

  const { menu, isLoading, isError, error } = useSelector(
    (state: RootState) => state.menus
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const displayedMenuItems = useCallback(() => {
    return menu.slice(0, showAll ? menu.length : 12);
  }, [menu, showAll]);

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
            {displayedMenuItems().map((item: MenuItem) => (
              <MenuCard
                key={item._id}
                item={item}
                textLength={textLength}
                email={email}
              />
            ))}
          </motion.div>

          {menu.length > 12 && (
            <div className="text-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                className="bg-blue-600 m-4 p-2 rounded-xl text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-blue-600"
              >
                {showAll ? "Show Less" : "Show More.."}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
