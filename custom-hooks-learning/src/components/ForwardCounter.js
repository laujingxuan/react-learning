import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  //when useCounter is called, the state defined in the custom hook will be tied to this forwardCounter
  //if useCounter is used in multiple components, every component will receive its own state
  //hence, only logic is shared
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
