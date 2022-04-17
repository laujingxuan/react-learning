const redux = require("redux");

//reducer function for redux must be taking in 2 parameters
//one is the old state while second is the action dispatched
//then the return will be the new state
//a default value must be set for state for reducer function (else will have error)
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

//subscriber function will be triggered everytime the state is changed
//when it is triggered, we can get the latest state through getState method
const counterSubsciber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

//tell redux that this function should be executed whenever our state changes
store.subscribe(counterSubsciber);

//dispatch an action to trigger the reducer
//type can be any action you like (like useReducer)
store.dispatch({type:'increment'})