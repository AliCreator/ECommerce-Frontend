import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  events: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    clearCredentials: (state, action) => {
      state.user = {};
      state.events = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setCredentials, clearCredentials, setEvents } =
  authSlice.actions;
export default authSlice.reducer;
