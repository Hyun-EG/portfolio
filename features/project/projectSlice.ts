import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowModal: true,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShowModal = true;
    },
    hideModal: (state) => {
      state.isShowModal = false;
    },
  },
});

export const { showModal, hideModal } = projectSlice.actions;
export default projectSlice.reducer;
