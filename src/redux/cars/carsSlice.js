import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const carsSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {
    setCars: (state, action) => {
      const newCars = action.payload;

      const uniqueNewCars = newCars.filter((newCar) => {
        return !state.cars.some((existingCar) => existingCar.id === newCar.id);
      });

      state.cars = [...state.cars, ...uniqueNewCars];
    },
  },
});
export const { setCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
