import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const carsSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {
    setCars: (state, action) => {
      state.cars = [...state.cars, ...action.payload];
    },
  },
});
export const { setCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
