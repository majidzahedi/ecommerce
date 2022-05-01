import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    logIn: (_, action) => ({ ...action.payload }),
    logOut: () => ({ user: null, token: null }),
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
