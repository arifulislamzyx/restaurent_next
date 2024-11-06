"use client";
import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { MenuItem } from "@/types/menuItems";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store/Store";
import { ChevronRight } from "lucide-react";
import PopularCartSkelliton from "@/components/ui/PopularCartSkelliton";
import { useSession } from "next-auth/react";
import PolularMenuCard from "@/components/popularProducts.tsx/MenuCard";

const PopularProducts: React.FC = () => {
  const { menu, isLoading, isError, error } = useSelector(
    (state: RootState) => state.menus
  );
  const dispatch = useDispatch<any>();
  const { data: session, status } = useSession();
  const email = session?.user?.email;

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (!Array.isArray(menu)) {
    return (
      <PopularCartSkelliton
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
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
        {menu.slice(0, 9).map((item: MenuItem) => (
          <PolularMenuCard key={item._id} item={item} email={email} />
        ))}
      </div>
      {menu.length > 9 && (
        <div className="absolute right-0 top-5 font-bold text-base ml-20 md:text-xl lg:text-2xl hover:bg-orange-400 hover:rounded-full p-1">
          <Link href={"/menus"}>
            <ChevronRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PopularProducts;
