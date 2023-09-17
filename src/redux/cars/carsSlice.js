import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getCarsThunk } from "./carsThunk";

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.cars = payload;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      );
  },
});

export const carsReducer = carsSlice.reducer;
