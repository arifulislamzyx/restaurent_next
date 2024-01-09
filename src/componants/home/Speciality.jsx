"use client";
import React from "react";
import author from "../../../public/Speciality/Author.svg";
import freeUpdates from "../../../public/Speciality/FreeUpdates.svg";
import productSold from "../../../public/Speciality/ProductSold.svg";
import ratings from "../../../public/Speciality/Ratings.svg";
import Image from "next/image";
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Speciality = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div>
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 w-5/6 h-52 my-7 mx-auto rounded-xl grid grid-cols-2 p-4 items-center  md:flex md:justify-evenly md:text-center md:px-6">
        <div className="flex items-center">
          <Image src={author} alt="author"></Image>
          <p className="text-white">
            <span className="text-lg font-bold">Elite Author</span> <br />
            On Food Industry
          </p>
          <hr className="hidden sm:block md:w-32 md:rotate-90 lg:w-32 lg:rotate-90" />
        </div>
        <div ref={ref} className="flex items-center">
          <Image src={productSold} alt="productSoled"></Image>
          <p className="text-white">
            <span className="font-light md:text-lg md:font-bold lg:text-lg lg:font-bold">
              {inView ? (
                <CountUp
                  start={995}
                  end={1020}
                  duration={3}
                  delay={1}
                ></CountUp>
              ) : null}
            </span>
            <br />
            <span className="text-sm ">Daily Order</span>
          </p>
          <hr className="hidden sm:block md:w-32 md:rotate-90 lg:w-32 lg:rotate-90" />
        </div>
        <div ref={ref} className="flex items-center">
          <Image src={ratings} alt="ratings"></Image>
          <p className="text-white">
            <span className="font-medium md:text-lg md:font-bold lg:text-lg lg:font-bold">
              {inView ? (
                <>
                  <CountUp
                    start={4.4}
                    end={4.9}
                    duration={2}
                    delay={0}
                    decimals={1}
                    decimal="."
                  ></CountUp>
                </>
              ) : null}
            </span>
            <br />
            Ratings & Reviews
          </p>
          <hr className="hidden sm:block md:w-32 md:rotate-90 lg:w-32 lg:rotate-90" />
        </div>
        <div className="flex items-center">
          <Image src={freeUpdates} alt="freeUpdates"></Image>
          <p className="text-white">
            <span className="font-medium md:text-lg md:font-bold lg:text-lg lg:font-bold">
              {" "}
              Free Update
            </span>
            <br />
            Forever & Always
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
