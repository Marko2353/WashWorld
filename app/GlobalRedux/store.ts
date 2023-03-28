"use client";

import { configureStore } from "@reduxjs/toolkit";
import selector from "./Features/selection/selectionSlice";
import countdownReducer from "./Features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    classes: selector,
    countdown: countdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
