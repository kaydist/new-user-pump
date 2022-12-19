import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callApi } from "../../config/apiSetup";
import { allAgentsUrl } from "../../config/urls";

export const getAllAgentsAction = createAsyncThunk(
  "auth/allAgentsAction",
  async (dispatch, ThunkApi) => {
    try {
      const res = await callApi.get(allAgentsUrl);
      return res.data;
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);

export const addAgentAction = createAsyncThunk(
  "auth/addAgentAction",
  async (values, ThunkApi) => {
    try {
      const res = await callApi.post(allAgentsUrl, values);
      ThunkApi.dispatch(getAllAgentsAction());
      return res.data;
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);
