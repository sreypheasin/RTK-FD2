import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./feature/counterSlice";

export const store = configureStore({
  reducer: {
    counter: countSlice
  }
});
