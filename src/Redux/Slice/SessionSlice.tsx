// import { createSlice } from "@reduxjs/toolkit";
// import { auth } from "@/Authentication/auth";

// const sessionSlice = createSlice({
//   name: "session",
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     setSession: (state, action) => {
//       state.user = action.payload;
//     },
//     clearSession: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { setSession, clearSession } = sessionSlice.actions;

// export const fetchSession = () => async (dispatch) => {
//   const sessionData = await auth();
//   dispatch(setSession(sessionData));
// };

// export default sessionSlice.reducer;
