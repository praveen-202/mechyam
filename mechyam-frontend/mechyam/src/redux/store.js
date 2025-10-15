import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/JobSlice";

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});
