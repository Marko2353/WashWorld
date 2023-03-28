"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: "",
};

export const classSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    addClass: (state, action) => {
      state.classes = action.payload;
    },
  },
});

export const { addClass } = classSlice.actions;

export default classSlice.reducer;
