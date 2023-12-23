"use client";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/HeaderBanner/banner1.png";
import img2 from "../../../public/HeaderBanner/banner2.png";
import img3 from "../../../public/HeaderBanner/banner3.png";
import img4 from "../../../public/HeaderBanner/banner4.svg";
import img5 from "../../../public/HeaderBanner/banner12.png";
import img6 from "../../../public/HeaderBanner/banner23.webp";
import googlePlay from "../../../public/HomePageImg/googlePlay.png";
import appStore from "../../../public/HomePageImg/AppStore.png";
import { motion } from "framer-motion";

const Header = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
      },
    },
  };

  const fadeOut = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
      },
    },
  };
  return (
    <div>
      <section className="bg-white flex justify-center items-center mx-auto py-5">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="w-1/2"
        >
          <h2 className="text-3xl font-bold">
            Multi Restaurant{" "}
            <span className="text-orange-600">
              Food Ordering & Delivery Solution
            </span>{" "}
            with Source Code
          </h2>
          <p>
            Build your very own multi restaurant online food ordering & delivery
            business with Our complete source code & post-purchase services.
          </p>
          <div className="flex gap-5 py-5">
            <Image src={googlePlay} width={150}></Image>
            <Image src={appStore} width={150}></Image>
          </div>
        </motion.div>
        <motion.div initial="initial" animate="animate" variants={fadeOut}>
          <Image src={img5} width={400}></Image>
        </motion.div>
      </section>
    </div>
  );
};

export default Header;
