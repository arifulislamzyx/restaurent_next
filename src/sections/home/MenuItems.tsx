"use client";

import React, { useState } from "react";
import FeaturedItems from "./FeaturedItems";

const MenuItems: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold text-base  md:text-xl lg:text-2xl ">
        Featured Items
      </h2>

      <FeaturedItems initialItemsShow={8} />
    </div>
  );
};

export default MenuItems;
