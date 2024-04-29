import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../../data.js";

const initialState = {
  products: allProducts,
  total: 0,
  price: 0,
};

export const producrsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id == payload;
      });
      item.amount += 1;
      producrsSlice.caseReducers.calculateTotal(state);
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.products.find((product) => {
        return product.id == payload;
      });
      item.amount -= 1;
      producrsSlice.caseReducers.calculateTotal(state);
    },
    Remove: (state, { payload }) => {
      const item = state.products.filter((pro) => {
        return pro.id !== payload;
      });
      producrsSlice.caseReducers.calculateTotal(state);
      state.products = item;
    },
    calculateTotal: (state) => {
      let price = 0;
      let total = 0;
      state.products.forEach((product) => {
        total = total + product.amount;
        price = price + product.amount * product.price;
      });
      state.total = total;
      state.price = price;
    },
  },
});
export const { calculateTotal, increaseAmount, decreaseAmount, Remove } =
  producrsSlice.actions;
export default producrsSlice.reducer;
