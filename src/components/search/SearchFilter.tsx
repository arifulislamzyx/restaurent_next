"use client";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { MenuItem } from "@/types/menuItems";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchFilter = (query: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const { menu, isLoading, isError, error } = useSelector(
    (state: RootState) => state.menus
  );

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);
  return query
    ? menu.filter(
        (filteredMenu: MenuItem) =>
          filteredMenu.name &&
          filteredMenu.name.toLowerCase().includes(query.toLowerCase())
      )
    : menu;
};

export default SearchFilter;
