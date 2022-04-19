import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //useSelector allows us to access the data managed in our redux store
  //we will need a function parameter that basically helps to determine which piece of data we want to extract from redux store
  //changes on store will causes this component that uses redux store to be reexecuted as well (subscription is automatically added)
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  //useDispatch hook helps to dispatch the action to ur redux store
  //dun need to pass in any arguments
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch({ type: "increment", amount: value });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
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
