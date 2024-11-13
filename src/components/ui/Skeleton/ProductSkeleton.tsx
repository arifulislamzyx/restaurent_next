import React from "react";
import CardSkeleton from "./CardSkeleton";

const ProductSkeliton = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 px-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-8 mx-4 md:px-14 lg:px-24 mt-5">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export default ProductSkeliton;
