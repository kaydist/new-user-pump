import { createSlice } from "@reduxjs/toolkit";
import {
  addUserAction,
  getAllUsersAction,
} from "./users.actions";

const initialState = {
  allUsers: [],
  loadingAllUsersStatus: "idle",
  isAddingUserStatus: "idle",
  errorMessage: "",
};

const UsersSlice = createSlice({
  name: "UsersState",
  initialState,

  reducers: {
    resetAccount: (state) => {
      state = initialState;
    },
  },

  extraReducers: (builder) => {
    //All Users
    builder.addCase(getAllUsersAction.pending, (state) => {
      state.loadingAllUsersStatus = "loading";
    });
    builder.addCase(getAllUsersAction.fulfilled, (state, action) => {
      state.allUsers = action.payload.users;
      state.loadingAllUsersStatus = "success";
    });
    builder.addCase(getAllUsersAction.rejected, (state, action) => {
      state.loadingAllUsersStatus = "error";
    });

    //Add User Action
    builder.addCase(addUserAction.pending, (state) => {
      state.isAddingUserStatus = "loading";
    });
    builder.addCase(addUserAction.fulfilled, (state, action) => {
      state.isAddingUserStatus = "success";
    });
    builder.addCase(addUserAction.rejected, (state, action) => {
      state.isAddingUserStatus = "error";
    });
  },
});

export const { resetAccount } = UsersSlice.actions;

export default UsersSlice.reducer;
