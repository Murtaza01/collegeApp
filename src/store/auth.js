import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: {
    user: false,
    admin: false,
  },
  stage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorizeUser(state) {
      state.isAuth.user = true;
    },
    authorizeAdmin(state) {
      state.isAuth.admin = true;
    },
    unAuthorize(state) {
      state.isAuth.user = false;
      state.isAuth.admin = false;
    },
    stage(state, action) {
      state.stage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
