"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuCard from "../utils/MenuCard";

const MenuItems: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold text-base ml-8 md:ml-20 lg:ml-28 md:text-xl lg:text-2xl ">
        Featured Items
      </h2>
      <MenuCard />
    </div>
  );
};

export default MenuItems;
