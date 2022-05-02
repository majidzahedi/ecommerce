import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cartItems: [],
    cartItemsCount: 0,
  },
  reducers: {
    toggleCart: (state) => ({ ...state, isOpen: !state.isOpen }),
    addProduct: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.cartItemsCount += 1;

      if (!existingCartItem) {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        const newCartItems = state.cartItems.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        state.cartItems = newCartItems;
      }
    },
  },
});

export const { toggleCart, addProduct } = cartSlice.actions;

export default cartSlice.reducer;
