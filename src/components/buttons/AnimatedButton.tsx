import React from "react";
import { motion } from "framer-motion";
import { IAAnimatedButton } from "@/types/animatedButton";

const AnimatedButton: React.FC<IAAnimatedButton> = ({
  variants,
  initial,
  whileInView,
  className,
  children,
  onClick,
}) => {
  return (
    <motion.button
      variants={variants}
      initial={initial}
      whileInView={whileInView}
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
