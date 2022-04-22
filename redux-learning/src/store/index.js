import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//configureStore allows us to set multiple slices' reducers into the store
//just set an object with different field made up of reducer function into the reducer field
const store = configureStore({
  //to access the store in component with useSelector, just pass state.counter.counter or state.counter.showCounter
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
