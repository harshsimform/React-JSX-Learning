import { useState } from "react";
import useCounter from "./useCounter";

const CounterOne = () => {
  // Code without Custome hook
  //   const [count, setCount] = useState(0);
  //   const Incr = () => {
  //     setCount(count + 1);
  //   };
  //   const Decr = () => {
  //     setCount(count - 1);
  //   };
  //   const Reset = () => {
  //     setCount(0);
  //   };

  //Code with Custom hook useCounter()
  // Using Custom hook useCounter()
  // Array Descructuring
  const [count, Incr, Decr, Reset] = useCounter(0, 1);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Decr}>Minus</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Incr}>Add</button>
    </>
  );
};

export default CounterOne;
