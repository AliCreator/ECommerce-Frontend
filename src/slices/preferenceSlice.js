import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: localStorage.getItem("isDark") === "true",
  menuOpen: false,
};


export const preferenceSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem("isDark", action.payload)
    },
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const { setMenuOpen, setTheme } = preferenceSlice.actions;


