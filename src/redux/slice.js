// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // export interface DataState{
// //     products : [],
// //     status: String,
// //     error: String | null
// // }

// const inintialState = {
//   products: [],
//   status: "e_com_product",
//   error: null,
// };

// export const fetchMenu = createAsyncThunk("slice/fetchProduct", async () => {
//   const productData = await axios("/api/menu");
//   const products = await productData.data;
//   return products;
// });

// const DataSlice = createSlice({
//   name: "data",
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchMenu.fulfilled, (state, action) => {
//       (state.status = "succeeded"), (state.Products = action.payload);
//     });
//     builder.addCase(fetchMenu.fulfilled, (state, action) => {
//       (state.status = "failed"), (state.error = action.error.message);
//     });
//   },
// });

// export default DataSlice.reducer;
