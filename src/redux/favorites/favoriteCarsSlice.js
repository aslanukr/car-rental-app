import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favCars",
  initialState: {
    total: 0,
  },
  reducers: {
    setFavTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setFavTotal } = favoritesSlice.actions;
export const favCarsTotalReducer = favoritesSlice.reducer;
