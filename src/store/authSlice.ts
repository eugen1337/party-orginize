import { createSlice } from "@reduxjs/toolkit";
import { queryLogin } from "./authThunk";

export type authSlice = {
  token: string | undefined;
};

const initialState: authSlice = {
  token: undefined,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(queryLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
