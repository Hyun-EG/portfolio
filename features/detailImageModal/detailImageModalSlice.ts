import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  imageUrl: "",
};

const detailImageModalSlice = createSlice({
  name: "detailImageModal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.imageUrl = action.payload;
    },
    hideModal: (state) => {
      state.isVisible = false;
      state.imageUrl = "";
    },
  },
});

export const { showModal, hideModal } = detailImageModalSlice.actions;
export default detailImageModalSlice.reducer;
