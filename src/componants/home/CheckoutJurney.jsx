"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import foodC from "../../../public/HeaderBanner/banner1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/varients";

const CheckoutJurney = () => {
  return (
    <section className="flex-row mx-8 p-4 md:flex md:justify-center md:items-center md:mx-auto w-5/6  my-5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-2xl">
      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        className="w-full md:w-1/2 lg:w-1/2"
      >
        <h3 className="text-2xl font-bold mb-5">
          Ensure the Perfect Checkout Journey for Your Customers
        </h3>
        <p>
          Customers can select food conveniently, customize their orders, and
          complete transactions during checkout. The checkout process is simple
          and minimized with multiple payment options.
        </p>
        <Button
          size="lg"
          className="rounded-full mb-4 transition hover:transform hover:-translate-y-1 mt-5"
        >
          Explore
        </Button>
      </motion.div>
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
      >
        <Image src={foodC} width={300} height={500} alt="cekoutImage"></Image>
      </motion.div>
    </section>
  );
};

export default CheckoutJurney;
