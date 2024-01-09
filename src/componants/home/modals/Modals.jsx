import useMenus from "@/Hooks/useMenus";
import Image from "next/image";
import React from "react";
import ModalsX from "../../../../app/menus/[singleMenu]/page";

const Modals = ({ isVisible, onClose, menus }) => {
  console.log(menus);
  //   const { image, name, recipe } = menuItems;

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          onClick={() => onClose()}
          className="text-black text-xl place-self-end"
        >
          X
        </button>
        <div className="bg-white p-2 rounded">{/* <ModalsX></ModalsX> */}</div>
      </div>
    </div>
  );
};

export default Modals;
