import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    //return state of reducer will overwrite the previous state
    //never overwrite the existing state, we should always return a brand new object
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
