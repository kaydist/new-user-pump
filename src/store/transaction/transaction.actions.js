import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callApi } from "../../config/apiSetup";
import { allTransactionsUrl, depositUrl } from "../../config/urls";

export const getAllTransactionsAction = createAsyncThunk(
  "auth/allTransactionsAction",
  async (dispatch, ThunkApi) => {
    try {
      const res = await callApi.get(allTransactionsUrl);
      return res;
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);

export const depositAction = createAsyncThunk(
  "auth/addUserAction",
  async (values, ThunkApi) => {
    try {
      const res = await callApi.post(depositUrl, values);
      ThunkApi.dispatch(getAllTransactionsAction());
      return res.data
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);
