import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/nav/navSlice";
import projectReducer from "../features/project/projectSlice";
import detailImageModalReducer from "../features/detailImageModal/detailImageModalSlice";
import selectedProjectReducer from "@/features/selectedProject/selectedProjectSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    project: projectReducer,
    detailImgModal: detailImageModalReducer,
    selectedProject: selectedProjectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
