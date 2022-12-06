import { createSlice } from "@reduxjs/toolkit";
import {
  loginAccountAction,
  logOutAction,
  registerAccountAction,
} from "./account.actions";

const initialState = {
  user: {},
  token: '',
  isLoginingStatus: "idle",
  isRegisterStatus: "idle",
  errorMessage: "",
};

const AccountSlice = createSlice({
  name: "AccountState",
  initialState,

  reducers: {
    resetAccount: (state) => {
      state = initialState;
    },
  },

  extraReducers: (builder) => {
    //Login Action
    builder.addCase(loginAccountAction.pending, (state) => {
      state.isLoginingStatus = "loading";
    });
    builder.addCase(loginAccountAction.fulfilled, (state, action) => {
      state.user = action.payload.data.user[0];
      state.token = action.payload.token;
      state.isLoginingStatus = "success";
    });
    builder.addCase(loginAccountAction.rejected, (state, action) => {
      state.isLoginingStatus = "error";
    });

    //Register Action
    builder.addCase(registerAccountAction.pending, (state) => {
      state.isRegisterStatus = "loading";
    });
    builder.addCase(registerAccountAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isRegisterStatus = "success";
    });
    builder.addCase(registerAccountAction.rejected, (state, action) => {
      state.isRegisterStatus = "error";
    });

    //Logout Action
    builder.addCase(logOutAction.pending, (state) => {
      state.isRegisterStatus = "idle";
    });
    builder.addCase(logOutAction.fulfilled, (state, action) => {
      state = initialState;
    });
    builder.addCase(logOutAction.rejected, (state, action) => {
      state.isRegisterStatus = "idle";
    });
  },
});

export const { resetAccount } = AccountSlice.actions;

export default AccountSlice.reducer;
