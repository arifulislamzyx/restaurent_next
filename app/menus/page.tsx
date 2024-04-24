"use client";
import React, { useState } from "react";
import OfferSlider from "../OfferSlider";
import MenuCard from "@/componants/utils/MenuCard";

const Page = () => {
  return (
    <div className="mt-5">
      <OfferSlider></OfferSlider>
      <h2 className="font-bold text-base ml-20 md:text-xl lg:text-2xl mt-5">
        Featured Items
      </h2>
      <MenuCard />
    </div>
  );
};

export default Page;
