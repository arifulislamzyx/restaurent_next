import Button from "@/components/buttons/Button";
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="max-w-[550px] rounded-2xl shadow-xl animate-pulse">
      <div className="h-60 bg-gray-300 rounded-t-xl"></div>
      <div className="py-5">
        <div className="px-3">
          <h4 className="h-6 bg-gray-300 rounded w-3/4 mb-2"></h4>
          <p className="h-4 bg-gray-300 rounded w-2/4"></p>
        </div>
        <div className="flex justify-between px-3">
          <p className="font-bold h-4 bg-gray-300 rounded w-1/4"></p>
          <Button className="flex items-center gap-1 text-xs font-bold rounded-full p-1 shadow-2xl bg-gray-300 hover:bg-gray-400 hover:rounded-full hover:p-1">
            <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
