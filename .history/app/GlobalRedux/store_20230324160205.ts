'use client';

import { ConfigureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/counter/counterSlice'

export const store = ConfigureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;