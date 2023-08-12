import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {},
});

export const authReducer = authSlice.reducer;
