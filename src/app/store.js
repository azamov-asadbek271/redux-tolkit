import { configureStore } from "@reduxjs/toolkit";
import ProducrsRedus from "../features/products/ProducrsSlice";
export const store = configureStore({
  reducer: ProducrsRedus,
});
