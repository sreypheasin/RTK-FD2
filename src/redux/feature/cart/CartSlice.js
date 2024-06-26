import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      // const item = action.payload;
      console.log("action.payload", action.payload);
      const addedItems = action.payload;

      state.cartItems.push(addedItems);
      //   console.log("state.cartItems after push", state.cartItems);
      state.total += 1;
    }
  }
});

// export action
export const { addToCard } = cartSlice.actions;

// export selector
// export const selectCartItems = (state) => state.cart.cartItems;

// export reducer
export default cartSlice.reducer;
