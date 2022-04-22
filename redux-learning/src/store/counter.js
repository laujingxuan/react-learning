import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//can create multiple slices based on usage and grouping
//every slice needs to have name field and initial state field
//also needs to add reducers into the slice (the methods used for different actions)
//toolkit allows us to manipulate directly as it will do the copying internally through imgur package
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    //all these actions can be triggered like counterSlice.actions.toggleCounter()
    //hence we will need to export actions so that other components can trigger it
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
