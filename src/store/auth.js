import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  stage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorize(state) {
      state.isAuth = true;
    },
    unAuthorize(state) {
      state.isAuth = false;
    },
    stage(state, action) {
      state.stage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
