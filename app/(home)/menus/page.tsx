"use client";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ProductSkeliton from "@/sections/utils/ProductSkeliton";
import { MenuItem } from "@/types/menuItems";
import { productAnm } from "@/animation/varients";
import { RootState } from "@/Redux/Store/Store";
import { useSession } from "next-auth/react";
import MenuCard from "@/components/menu/MenuCard";
import ShowMoreButton from "@/components/menu/ShowMoreButton";
import PopularProducts from "@/sections/home/PopularProducts";

const MenuItems = () => {
  const [cartData, setCartData] = useState<MenuItem | null>(null);
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const [textLength, setTextLength] = useState(40);
  const { data: session, status } = useSession();
  const email = session?.user?.email;

  const { menu, isLoading, isError, error } = useSelector(
    (state: RootState) => state.menus
  );
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

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
            {menu.slice(0, showAll ? menu.length : 12).map((item: MenuItem) => (
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
              <ShowMoreButton showAll={showAll} onClick={() => !setShowAll} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
