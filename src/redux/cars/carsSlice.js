import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: [],
  reducers: {},
});

export const carsReducer = carsSlice.reducer;
