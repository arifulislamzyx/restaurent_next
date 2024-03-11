// import { gql, useQuery } from "@apollo/client";
// import React from "react";
// import { MenuItem } from "@/types/menuItems";

// const GET_MENU_ITEMS = gql`
//   query {
//     menuItems {
//       _id
//       name
//       price
//       category
//       recipe
//       image
//     }
//   }
// `;

// const UseMenus = (): {
//   menuItems: MenuItem[];
//   loading: boolean;
//   error: string | null;
// } => {
//   const { loading, error, data } = useQuery(GET_MENU_ITEMS);

//   if (loading) return { menuItems: [], loading: true, error: null };
//   if (error) return { menuItems: [], loading: false, error: error.message };

//   return { menuItems: data.menuItems, loading: false, error: null };
// };

// export default UseMenus;

"use client";
import { useEffect, useState } from "react";

const useMenus = () => {
  const [menuItems, setMenuItems] = useState("");

  useEffect(() => {
    fetch("api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);
  return { menuItems };
};

export default useMenus;
