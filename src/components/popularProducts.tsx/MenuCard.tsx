import { truncateText } from "@/utils/TruncateText";
import AddToCartButton from "../menu/AddToCartButton";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { showSlideProduct } from "@/animation/varients";
import { MenuItem } from "@/types/menuItems";

const textLength = 40;

const PolularMenuCard = ({
  item,
  email,
}: {
  item: MenuItem;
  email: string | null | undefined;
}) => (
  <motion.div
    key={item._id}
    variants={showSlideProduct}
    className="flex gap-2 shadow-md hover:shadow-2xl p-1 rounded-2xl"
  >
    <Image
      src={item.image}
      width={100}
      height={50}
      alt={item.name}
      className="rounded-s-xl"
    ></Image>
    <div>
      <Link href={`/menus/${item._id}`}>
        <h3 className="text-sm font-bold md:text-base lg:text-lg mb-2">
          {item.name}
        </h3>
        <p>{truncateText(item.recipe ?? "", textLength)}</p>
      </Link>
      <div className="flex justify-between px-3 mt-1">
        <p className="font-bold">${item.price}</p>

        <AddToCartButton
          item={item}
          email={email}
          className="flex items-center gap-1 px-2 py-1 hover:bg-orange-600 rounded-full hover:text-white transition-all"
        />
      </div>
    </div>
  </motion.div>
);

export default PolularMenuCard;
