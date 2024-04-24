"use client";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import MenuCard from "@/componants/utils/MenuCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TestComponent = () => {
  const { menu, isLoading, isError, error } = useSelector(
    (state) => state.menus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <div>
      <h1>Menu Items</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error}</p>}
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            <p>{menuItem.name}</p>
            <p>{menuItem.price}</p>
            <MenuCard />
            {/* Render other properties of the menu item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
