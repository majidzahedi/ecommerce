import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    logIn: (state, { payload }) => {
      localStorage.setItem("auth_token", JSON.stringify(payload.token));
      const { user } = payload;
      state.user = { id: user.id, name: user.name, email: user.email };
      state.token = payload.token;
    },
    logOut: () => ({ user: null, token: null }),
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
