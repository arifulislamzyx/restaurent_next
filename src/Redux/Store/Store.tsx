import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../Slice/MenuSlice";

export const RootState = combineReducers({
  menus: MenuReducer,
});

const store = configureStore({
  reducer: RootState,
});
export default store;
