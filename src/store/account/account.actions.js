import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginUrl, signUpUrl } from "../../config/urls";

export const loginAccountAction = createAsyncThunk(
  "auth/loginAction",
  async (values, ThunkApi) => {
    try {
      const res = await axios.post(loginUrl, values);
      return res.data;
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);

export const registerAccountAction = createAsyncThunk(
  "auth/signupAction",
  async (values, ThunkApi) => {
    try {
      const res = await axios.post(signUpUrl, { role: "admin", ...values });
      return res.data;
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);

export const logOutAction = createAsyncThunk(
  "auth/logoutAction",
  async (values, ThunkApi) => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      return true;
    } catch (error) {
      const message = error.response.data?.message;
      return ThunkApi.rejectWithValue(message);
    }
  }
);
