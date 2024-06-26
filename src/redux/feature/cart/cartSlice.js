import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
  quantity: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      console.log("action.payload", action.payload);
      //   check if product exit
      const existingProduct = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      console.log("existingProduct", existingProduct);

      //   if product existing increase qty
      if (existingProduct) {
        state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item.qty += 1;
            state.totalItems += 1;
          }
        });
      } else {
        state.totalItems += 1;
        state.cartItems.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      // if product exist
      state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.qty += 1;
          state.totalItems += 1;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      // if product exist
      state.cartItems.map((item) => {
        if (item.id === action.payload.id && item.qty === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalItems -= 1;
        } else if (item.id === action.payload.id && item.qty > 1) {
          item.qty -= 1;
          state.totalItems -= 1;
        }
      });
    },
    removeAll: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
    }
  }
});

// export action
export const { addToCard, increaseQuantity, decreaseQuantity, removeAll } =
  cartSlice.actions;

// export selector
export const selectTotalItems = (state) => state?.cart?.totalItems;
export const selectCartItems = (state) => state?.cart?.cartItems;
// export reducer
export default cartSlice.reducer;
