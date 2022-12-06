import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addUserUrl, allUsersUrl } from "../../config/urls";

export const getAllUsersAction = createAsyncThunk(
  "auth/allUsersAction",
  async (values, ThunkApi) => {
    try {
      const res = await axios.get(allUsersUrl, values);
      return res.data.data;
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);

export const addUserAction = createAsyncThunk(
  "auth/addUserAction",
  async (values, ThunkApi) => {
    try {
      await axios.post(addUserUrl, values);
      ThunkApi.dispatch(getAllUsersAction())
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);
