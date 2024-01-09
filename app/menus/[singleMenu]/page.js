"use client";
import Modals from "@/componants/home/modals/Modals";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ModalsX = ({ params }) => {
  const [ModalsX] = params;
  const [menus, setMenus] = useState("");

  useEffect(() => {
    if (ModalsX) {
      fetch(`/api/menu/${ModalsX}`)
        .then((res) => res.json())
        .then((data) => setMenus(data))
        .catch((err) => console.log("dynamic route not defined", err));
    }
  }, [ModalsX]);
  return (
    <div>
      <img src={menus.image}></img>
      <h2>Here is Modals</h2>
    </div>
  );
};

export default ModalsX;
