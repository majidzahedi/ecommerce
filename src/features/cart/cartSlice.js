import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleCart: (state) => ({ isOpen: !state.isOpen }),
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
