import { combineReducers } from "redux";
import favoritesReducer from "./favorites/favoritesSlice";
import { carsReducer } from "./cars/carsSlice";

export const reducer = combineReducers({
  cars: carsReducer,
  favorites: favoritesReducer,
});
