import { combineReducers } from "redux";
import { carsReducer } from "./cars/carsSlice";
import favoritesReducer from "./favorites/favoritesSlice";

export const reducer = combineReducers({
  favorites: favoritesReducer,
  cars: carsReducer,
});
