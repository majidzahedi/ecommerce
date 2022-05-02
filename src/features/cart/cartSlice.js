import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    totalPrice: 0,
  },
  reducers: {
    toggleCart: (state) => ({ ...state, isOpen: !state.isOpen }),
    addProduct: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.cartItemsCount += 1;
      state.totalPrice += action.payload.price;

      !existingCartItem
        ? (state.cartItems = [
            ...state.cartItems,
            { ...action.payload, quantity: 1 },
          ])
        : (state.cartItems = state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ));
    },
    removeProduct: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.cartItemsCount -= 1;
      state.totalPrice -= action.payload.price;

      existingCartItem.quantity === 1
        ? (state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          ))
        : (state.cartItems = state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ));
    },
    removeCartItem: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      state.cartItemsCount = state.cartItemsCount - existingCartItem.quantity;
      state.totalPrice -= existingCartItem.price * existingCartItem.quantity;

      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

export const { toggleCart, addProduct, removeProduct, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
