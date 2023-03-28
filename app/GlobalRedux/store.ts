"use client";

import { configureStore } from "@reduxjs/toolkit";
import selector from "./Features/selection/selectionSlice";

export const store = configureStore({
  reducer: {
    classes: selector,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
