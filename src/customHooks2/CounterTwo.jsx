import { useState } from "react";
import useCounter from "./useCounter";

const CounterTwo = () => {
  // Using Custom hook useCounter()
  // Array Descructuring, and passed initial count as 10
  const [count, Incr, Decr, Reset] = useCounter(10, 5);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Decr}>Minus</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Incr}>Add</button>
    </>
  );
};

export default CounterTwo;
