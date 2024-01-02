"use client";
import React, { useEffect, useState } from "react";

const useMenus = () => {
  const [menuItems, setMenuItems] = useState("");

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);
  return { menuItems };
};

export default useMenus;
