import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {},
});

export default favoritesSlice.reducer;
