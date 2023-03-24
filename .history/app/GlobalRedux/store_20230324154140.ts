'use client';

import { ConfigureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import counterReducer from '../Features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;