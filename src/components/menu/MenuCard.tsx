import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { showSlideProduct } from "@/animation/varients";
import { truncateText } from "@/utils/TruncateText";
import AddToCartButton from "./AddToCartButton";
import { MenuCardProps } from "@/types/types";

const MenuCard: React.FC<MenuCardProps> = ({ item, textLength, email }) => (
  <motion.div
    key={item._id}
    variants={showSlideProduct}
    className="w-full rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all max-w-[300px] overflow-hidden"
  >
    <Image
      width={300}
      height={150}
      src={item.image}
      alt={item.name}
      className="rounded-t-xl transition duration-700 ease-in-out transform hover:scale-105"
    />
    <div className="py-5 px-3">
      <Link href={`/menus/${item._id}`}>
        <h4 className="text-sm font-bold md:text-base lg:text-lg mb-2 cursor-pointer">
          {item.name}
        </h4>
      </Link>
      <p className="mb-2">{truncateText(item.recipe, textLength)}</p>
      <div className="flex justify-between">
        <p className="font-bold">${item.price}</p>
        <AddToCartButton
          className="flex items-center gap-1 px-2 py-1 hover:bg-orange-600 rounded-full hover:text-white transition-all"
          email={email}
          item={item}
        />
      </div>
    </div>
  </motion.div>
);

export default MenuCard;
