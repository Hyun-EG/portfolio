import { createSlice } from "@reduxjs/toolkit";

interface selectedProjectType {
  selectedProject: null | string;
}

const initialState: selectedProjectType = {
  selectedProject: null,
};

const selectedProjectSlice = createSlice({
  name: "selectedProject",
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
});

export const { setSelectedProject } = selectedProjectSlice.actions;
export default selectedProjectSlice.reducer;
