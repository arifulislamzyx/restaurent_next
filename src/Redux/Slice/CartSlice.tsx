import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CartProps {
  carts: any;
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}

const initialState: CartProps = {
  carts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchCartItems = createAsyncThunk(
  "carts/fetchCartItems",
  async (email: string) => {
    try {
      const res = await axios.get(`/api/getCartItems?email=${email}`);
      return res.data;
    } catch (error) {
      throw Error("Error While getting Add Carts Data");
    }
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.carts = [];
      state.isError = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.carts = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
