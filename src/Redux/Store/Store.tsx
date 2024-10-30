import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../Slice/MenuSlice";
import CartReducer from "../Slice/CartSlice";
// import SessionReducer from "../Slice/SessionSlice";

export const RootState = combineReducers({
  menus: MenuReducer,
  carts: CartReducer,
  // session: SessionReducer,
});

const store = configureStore({
  reducer: RootState,
});

export type AppDispatch = typeof store.dispatch;

export default store;
