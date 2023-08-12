import { createSlice } from "@reduxjs/toolkit";

const productInitialState = {};

export const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  extraReducers: (builder) => {},
});

export const productReducer = productSlice.reducer;
