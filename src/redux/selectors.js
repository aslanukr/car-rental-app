import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;
export const selectFavorites = (state) => state.favorites;

export const selectIfCarFavorite = createSelector(
  [selectFavorites, (_, id) => id],
  (favorites, id) => favorites.includes(id)
);
