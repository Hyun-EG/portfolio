import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    showNav: (state) => {
      state.isVisible = true;
    },
    hideNav: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showNav, hideNav } = navSlice.actions;
export default navSlice.reducer;
