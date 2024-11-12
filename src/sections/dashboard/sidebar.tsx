"use client";
import Link from "next/link";
import React, { useState } from "react";
import { sidebarOptions } from "@/data/sidebarMenu";
import { ChevronDown } from "lucide-react";
import { IASidebar, IASubmenu } from "@/types/sidebar";
import Button from "@/components/buttons/Button";

const Sidebar: React.FC = () => {
  const [activeOptions, setActiveOptions] = useState<{
    [key: string]: boolean;
  }>({});

  const handleOptions = (optionId: number) => {
    setActiveOptions((prevState) => {
      const newState = Object.keys(prevState).reduce(
        (acc, key) => {
          acc[key] = false;
          return acc;
        },
        {} as { [key: string]: boolean }
      );

      return {
        ...newState,
        [optionId]: !prevState[optionId],
      };
    });
  };

  return (
    <div className="bg-slate-200 text-black w-[300px] h-screen rounded-t-lg mx-auto py-6 px-4">
      <div className="ml-10">
        <h2 className="text-2xl mb-4">
          <Link href={"/dashboard"}>Home</Link>
        </h2>
        <ul>
          {sidebarOptions.map((option: IASidebar) => (
            <li key={option.id} className="mb-2 mx-auto">
              <Button
                onClick={() => handleOptions(option.id)}
                className={`flex justify-center items-center gap-1 text-lg font-bold px-2 py-1 mb-4 rounded-md hover:text-white hover:bg-orange-600 border-b-blue-700 border-2 ${
                  activeOptions[option.id] ? "bg-orange-600 text-white" : ""
                }`}
              >
                <ChevronDown
                  size={16}
                  className={`text-xl transition-transform duration-300 ${
                    activeOptions[option.id] ? "rotate-180" : ""
                  }`}
                />
                <p>{option.title}</p>
              </Button>
              <div
                className={`transition-max-height duration-300 ease-in-out ${
                  activeOptions[option.id] ? "max-h-96" : "max-h-0"
                } overflow-hidden`}
              >
                <ul>
                  {option.submenus?.map((submenu: IASubmenu) => (
                    <li
                      key={submenu.id}
                      className="transition-all duration-300"
                    >
                      <Link
                        href=""
                        ref={submenu.slug}
                        className="flex items-center text-base hover:bg-purple-600 hover:text-white rounded px-1 gap-2 ml-2"
                      >
                        <p>{submenu.icons}</p>
                        <p>{submenu.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
