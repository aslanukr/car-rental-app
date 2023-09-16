import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCatalog } from "src/services/api";

export const getCarsThunk = createAsyncThunk(
  "cars/getCatalog",
  async (_, thunkAPI) => {
    try {
      return await getCatalog();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
