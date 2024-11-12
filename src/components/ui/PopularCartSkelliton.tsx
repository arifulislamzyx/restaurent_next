import SkeletonLoader from "@/sections/utils/Skeleton/SkeletonLoader";
import React from "react";
import Loading from "./loading";

const PopularCartSkelliton = ({
  isLoading,
  isError,
  error,
}: {
  isLoading: boolean;
  isError: boolean;
  error: string;
}) => {
  return (
    <div>
      {isLoading && (
        <p>
          <Loading />
        </p>
      )}
      {isError && <p>Error: {error}</p>}
      <div className="w-full grid grid-cols-1 mx-auto items-center gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8   mt-5">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    </div>
  );
};

export default PopularCartSkelliton;
