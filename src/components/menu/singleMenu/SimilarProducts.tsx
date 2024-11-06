import { productAnm, showSlideProduct } from "@/animation/varients";
import { motion } from "framer-motion";
import MenuCard from "../MenuCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const SimilarProducts = ({ filteredMenu, email }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 15,
    },
  });
  return (
    <motion.div
      variants={productAnm}
      initial="hidden"
      animate="show"
      className=" md:gap-4 lg:gap-8 mt-5 py-4 keen-slider"
      ref={sliderRef}
    >
      {filteredMenu.map((menu) => (
        <div
          key={menu._id}
          className=" shadow-xl hover:shadow-2xl rounded-xl  keen-slider__slide"
        >
          <MenuCard item={menu} textLength={40} email={email} />
        </div>
      ))}
    </motion.div>
  );
};

export default SimilarProducts;
