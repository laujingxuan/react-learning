import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  //useSelector allows us to access the data managed in our redux store
  //we will need a function parameter that basically helps to determine which piece of data we want to extract from redux store
  //changes on store will causes this component that uses redux store to be reexecuted as well (subscription is automatically added)
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  //useDispatch hook helps to dispatch the action to ur redux store
  //dun need to pass in any arguments
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    //value can be accessed in the store by action.payload
    dispatch(counterActions.increment(value)); // {type: SOME_UNIQUE_IDENTIFIER, payload: <your value>}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button
          onClick={(e) => {
            incrementHandler(1);
          }}
        >
          Increment
        </button>
        <button
          onClick={(e) => {
            incrementHandler(5);
          }}
        >
          Increment By 5
        </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
