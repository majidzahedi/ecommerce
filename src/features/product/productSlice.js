import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "../../mock/dummydata.json";

const productSlice = createSlice({
  name: "products",
  initialState: PRODUCTS,
  reducers: {},
});

export default productSlice.reducer;
