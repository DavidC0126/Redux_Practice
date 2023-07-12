import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showToggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // tool kit has an machenusm that allows you to mutate
      // original state (it will make a copy of original state and change the clone one)
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showToggle = !state.showToggle;
    }
  }
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
