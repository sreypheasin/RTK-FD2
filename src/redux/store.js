import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./features/counter/counterSlice";
import productSlice from "./features/product/productSlice";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: countSlice,
    product: productSlice,
    cart: cartSlice,
    user: userSlice
  }
});
