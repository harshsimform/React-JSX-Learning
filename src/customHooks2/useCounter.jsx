import { useState } from "react";

const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);
  const Incr = () => {
    setCount(count + value);
  };
  const Decr = () => {
    setCount(count - value);
  };
  const Reset = () => {
    setCount(initialCount);
  };

  return [count, Incr, Decr, Reset];
};

export default useCounter;
