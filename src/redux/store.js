import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./feature/counter/counterSlice";
import productSlice from "./feature/product/productSlice";
import cartSlice from "./feature/cart/cartSlice";
import userSlice from "./feature/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: countSlice,
    product: productSlice,
    cart: cartSlice,
    user: userSlice
  }
});
