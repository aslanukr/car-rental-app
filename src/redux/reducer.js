import { combineReducers } from "redux";

import { carsReducer } from "./cars/carsSlice";
import { favCarsTotalReducer } from "./favorites/favoriteCarsSlice";

export const reducer = combineReducers({
  favTotal: favCarsTotalReducer,
  cars: carsReducer,
});
