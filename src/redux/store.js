import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesSlice from "./favorites/favoritesSlice";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice);

export const store = configureStore({
  reducer: persistedFavoritesReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
