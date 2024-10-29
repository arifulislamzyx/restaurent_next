import { ICart } from "@/types/cart";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CartProps {
  carts: ICart[];
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const initialState: CartProps = {
  carts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchCartItems = createAsyncThunk(
  "carts/fetchCartItems",
  async (token: string) => {
    try {
      const res = await axios.get("api/getCartItems", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      throw Error("Error While getting Add Carts Data");
    }
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
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

export default cartSlice.reducer;
