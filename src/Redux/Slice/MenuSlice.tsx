import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "@/types/menuItems";
import axios from "axios";

interface MenuProps {
  menu: MenuItem[];
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}

const initialState: MenuProps = {
  menu: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  try {
    const response = await axios.get<MenuItem[]>("api/menu");
    return response.data;
  } catch (error) {
    throw Error("Failed to fetch menu items");
  }
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
