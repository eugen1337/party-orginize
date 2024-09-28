import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "api/base";

export const queryLogin = createAsyncThunk(
  "auth/queryLogin",
  async (payload: { login: string; password: string }) => {
    const url = `${BASE_URL}/auth?login=${payload.login}&password=${payload.password}`;
    const response = await fetch(url);

    console.log("queryLogin = " + response);

    return "response.json";
  }
);
