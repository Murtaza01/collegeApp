import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: {
    user: false,
    admin: false,
  },
  setStage: null,
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
      state.setStage = null;
    },
    setStage(state, action) {
      state.setStage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
