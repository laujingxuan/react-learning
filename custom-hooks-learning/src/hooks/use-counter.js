import { useState, useEffect } from "react";

//custom hooks can also receive parameters based on your design
//you can also set a default parameter like below
//which means that true will be used when no parameter is being passed in
//you can also pass in a function, depends on your design
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  //custom hook can return anything/function that you want to return
  //so that can be used in the component
  return counter;
};

export default useCounter;
