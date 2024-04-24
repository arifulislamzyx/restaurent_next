import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../Slice/MenuSlice";

const RootState = combineReducers({
  menus: MenuReducer,
});

const store = configureStore({
  reducer: RootState,
});
export default store;
