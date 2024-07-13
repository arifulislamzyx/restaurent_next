import { showSlideProduct } from "@/animation/varients";
// import Modals from "@/sections/home/modals/Modals";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, type FC } from "react";
import { IoBagAdd } from "react-icons/io5";

interface ProductProps {
  image: string;
  name: string;
  recipe: string;
  price: number;
}

const ProductCard: FC<ProductProps> = ({ image, name, price, recipe }) => {
  const [textLength, setTextLength] = useState(40);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const truncateText = (text: String, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <motion.div
      variants={showSlideProduct}
      initial={"hidden"}
      whileInView={"show"}
      className="w-300 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all max-w-[450px] overflow-hidden"
    >
      <Image
        width={300}
        height={150}
        src={image}
        alt={name}
        className="rounded-t-xl transition duration-700 ease-in-out transform hover:scale-105"
      ></Image>
      <div className="py-5">
        <div className="px-3">
          <h4 className="text-sm font-bold md:text-base lg:text-lg mb-2">
            {name}
          </h4>
          <p className="mb-2">{truncateText(recipe, textLength)}</p>
        </div>
        <div className="flex justify-between px-3">
          <p className="font-bold">${price}</p>
          <button
            className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-slate-50 hover:bg-orange-600 hover:rounded-full hover:p-1 "
            onClick={handleModal}
          >
            <IoBagAdd></IoBagAdd>Add
          </button>
          {/* <Modals
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          ></Modals> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
