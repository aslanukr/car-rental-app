import { combineReducers } from "redux";
import favoritesReducer from "./favorites/favoritesSlice";

export const reducer = combineReducers({
  favorites: favoritesReducer,
});
