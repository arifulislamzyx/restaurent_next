import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../Slice/MenuSlice";
import CartReducer from "../Slice/CartSlice";

export const RootState = combineReducers({
  menus: MenuReducer,
  carts: CartReducer,
});

const store = configureStore({
  reducer: RootState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
