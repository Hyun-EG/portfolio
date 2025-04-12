import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/nav/navSlice";
import projectReducer from "../features/project/projectSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
