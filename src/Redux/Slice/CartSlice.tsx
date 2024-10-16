import { ICart } from "@/Hooks/cart";
import { useAuth, useUser } from "@clerk/nextjs";
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
  reducers: {
    // addItems: (state, action: PayloadAction<ICart>) => {
    //   state.carts.push(action.payload);
    //   console.log(`additems action ${action}`);
    // },
    // removeItem: (state, action: PayloadAction<string>) => {
    //   state.carts = state.carts.filter((item) => item._id !== action.payload);
    // },
    // updateItem: (state, action: PayloadAction<ICart>) => {
    //   const index = state.carts.findIndex(
    //     (item) => item._id === action.payload._id
    //   );
    //   if (index != -1) {
    //     state.carts[index] = action.payload;
    //   }
    // },
    // stateClear: (state) => {
    //   state.carts = [];
    // },
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

export default cartSlice.reducer;
