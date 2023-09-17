import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;
export const selectCurrentPage = (state) => state.cars.currentPage;
export const selectTotalPages = (state) => state.cars.totalPages;
export const selectCarsIsLoading = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;

export const selectFavorites = (state) => state.favorites;

export const selectIfCarFavorite = createSelector(
  [selectFavorites, (_, id) => id],
  (favorites, id) => favorites.includes(id)
);
