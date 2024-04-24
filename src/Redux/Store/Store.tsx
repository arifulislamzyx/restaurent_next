import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../Slice/MenuSlice";
import { MenuItem } from "@/types/menuItems";

const store = configureStore({
  reducer: {
    menus: MenuReducer,
  },
});

export default store;
