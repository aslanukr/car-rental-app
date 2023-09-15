import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const { carId } = action.payload;
      if (!state.includes(carId)) {
        state.push(carId);
      }
    },
    removeFromFavorites: (state, action) => {
      const { carId } = action.payload;
      return state.filter((id) => id !== carId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
