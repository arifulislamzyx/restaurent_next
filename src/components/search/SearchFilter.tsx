"use client";
import { fetchMenu } from "@/Redux/Slice/MenuSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchFilter = (query) => {
  const dispatch = useDispatch<AppDispatch>();
  const { menu, isLoading, isError, error } = useSelector(
    (state: RootState) => state.menus
  );

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);
  return query
    ? menu.filter((filteredMenu) =>
        filteredMenu.name.toLowerCase().includes(query.toLowerCase())
      )
    : menu;
};

export default SearchFilter;
