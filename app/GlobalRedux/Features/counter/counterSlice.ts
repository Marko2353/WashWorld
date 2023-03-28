import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeLeft: 10,
};

const countdownSlice = createSlice({
  name: "countdown",
  initialState,
  reducers: {
    decrementTimeLeft(state) {
      state.timeLeft--;
    },
  },
});

export const { decrementTimeLeft } = countdownSlice.actions;

export default countdownSlice.reducer;
