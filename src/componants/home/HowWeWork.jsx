"use client";
import React from "react";
import orderProcess from "../../../public/HomePageImg/OrderProcess/OrderProcess.png";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/animation/varients";

const HowWeWork = () => {
  return (
    <section>
      <div className="text-center my-20 px-40">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
        >
          <h4 className="text-2xl font-bold mb-2">
            How Does <span className="text-red-700">Our Company</span> Work?
          </h4>
          <p>
            Our Company is designed to make your business more flexible and cost
            effective across all users. So you can ensure successful order
            delivery each time.
          </p>
        </motion.div>
        <div className="text-center gap-1 py-5">
          <motion.button
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-300  p-4 rounded-full mr-1"
          >
            Order Accepted by Restaurant
          </motion.button>
          <motion.button
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-300  p-4 rounded-full ml-1"
          >
            Order Accepted by Deliveryman
          </motion.button>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className="mr-10"
      >
        <div className="relative">
          <Image
            src={orderProcess}
            alt="Order Process Image"
            width={850}
            className="mx-auto block py-14"
          ></Image>
          <p className="absolute top-1 bottom-1/4 left-48 w-full">
            1. Customer places order
            <br />
            {"   "}through app or web
          </p>
          <p className="absolute top-1 bottom-1/4 left-[980px] w-full">
            2. Restaurant accepts the <br />
            order and starts to prepare food
          </p>
          <p className="absolute  bottom-56 left-[900px] w-full">
            3. Restaurant prepares food and <br />
            handover to deliveryman
          </p>
          <p className="absolute bottom-8 left-80 w-full">
            4. Deliveryman receives food from
            <br />
            the restaurant and out for delivery
          </p>
          <p className="absolute bottom-40 left-44 w-full">
            5. Customer receives order <br />
            from deliveryman
          </p>
          {/* customer to restaurent */}
          <div className="absolute top-0 bottom-1/4 left-[435px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="504"
              height="66"
              viewBox="0 0 504 66"
              fill="none"
            >
              <path
                d="M1 56V11C1 5.47715 5.47715 1 11 1H493C498.523 1 503 5.47715 503 11V65.5"
                stroke="#E55D28"
                stroke-dasharray="6 6"
              ></path>
            </svg>
            <div className="absolute -left-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="mr-2"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="6"
                  fill="#FF5722"
                  stroke="white"
                  stroke-width="2"
                ></circle>
              </svg>
            </div>
            <div className="absolute -right-1 -rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M7.41 1.41L2.83 6L7.41 10.59L6 12L0 6L6 0L7.41 1.41Z"
                  fill="#FF5722"
                ></path>
              </svg>
            </div>
          </div>
          {/* restaurent to delivery man */}
          <div className="absolute top-40 bottom-1/4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="403"
              height="179"
              viewBox="0 0 403 179"
              fill="none"
            >
              <path
                d="M193 1H392C397.523 1 402 5.47715 402 11V168C402 173.523 397.523 178 392 178H0"
                stroke="#E55D28"
                stroke-dasharray="6 6"
              ></path>
            </svg>
            <div className="absolute right-[400px] bottom-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M7.41 1.41L2.83 6L7.41 10.59L6 12L0 6L6 0L7.41 1.41Z"
                  fill="#FF5722"
                ></path>
              </svg>
            </div>
          </div>
          {/* deliveryman to customer */}
          <div className="absolute top-72 left-[420px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="221"
              height="108"
              viewBox="0 0 221 108"
              fill="none"
            >
              <path
                d="M1 0V97C1 102.523 5.47715 107 11 107H220.5"
                stroke="#E55D28"
                stroke-dasharray="6 6"
              ></path>
            </svg>
            <div className="absolute -top-3 -left-1 rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
              >
                <path
                  d="M7.41 1.41L2.83 6L7.41 10.59L6 12L0 6L6 0L7.41 1.41Z"
                  fill="#FF5722"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowWeWork;
