"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "@/types/menuItems";
import SkeletonLoader from "../utils/Skeleton/SkeletonLoader";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import { useDispatch, useSelector } from "react-redux";
import RootSate from "@/Redux/Store/Store";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Button from "@/components/buttons/Button";

type RootSate = any;

const PopularProducts: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [textLength, setTextLength] = useState(40);

  const { menu, isLoading, isError, error } = useSelector(
    (state: RootSate) => state.menus
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

  if (!Array.isArray(menu)) {
    return (
      <div>
        {isLoading && <p>Loading......</p>}
        {isError && <p>Error: {error}</p>}
        <div className="w-full grid grid-cols-1 mx-auto items-center gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8   mt-5">
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
    );
  }
  return (
    <div className=" relative mt-5 py-5 max-w-5xl mx-auto">
      <h2 className="flex">
        <span className=" font-bold text-base md:text-xl lg:text-2xl ">
          Most Popular Product
        </span>
      </h2>
      <div className="grid grid-cols-1 mx-auto items-center gap-3 px-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8  mt-5">
        {/* .slice(0, showAll ? menuItems.length : 6). */}
        {menu.slice(0, 9).map((items: MenuItem) => (
          <div
            key={items._id}
            className="flex gap-2 shadow-md hover:shadow-2xl p-1 rounded-2xl"
          >
            <Image
              src={items.image}
              width={100}
              height={50}
              alt={items.name}
              className="rounded-s-xl"
            ></Image>
            <div>
              <div>
                <h3 className="text-sm font-bold md:text-base lg:text-lg mb-2">
                  {items.name}
                </h3>
                <p>{truncateText(items.recipe, textLength)}</p>
              </div>
              <div className="flex justify-between px-3 mt-1">
                <p className="font-bold">${items.price}</p>

                <Button
                  onClick={() => setShowProductModal(true)}
                  className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1"
                >
                  <ShoppingCart size={16} />
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {menu.length > 9 && (
        <div className="absolute right-0 top-5 font-bold text-base ml-20 md:text-xl lg:text-2xl hover:bg-orange-400 hover:rounded-full p-1">
          <Link href={"/menus"}>
            <ChevronRight size={16} />
          </Link>
        </div>
      )}
      {/* <Modals
        isVisible={showProductModal}
        onClose={() => setShowProductModal(false)}
      ></Modals> */}
    </div>
  );
};

export default PopularProducts;
