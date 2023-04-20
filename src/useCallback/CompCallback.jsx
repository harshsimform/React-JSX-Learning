import { useCallback } from "react";
import { useState } from "react";

const CompCallback = () => {
  const [counter, setCounter] = useState(0);
  function getIncr() {
    setCounter(counter + 1);
    console.log("harsh");
  }
  // below callback function will update the state value only once cause we have not pass dependency array. but function will get called every time on button click check console.
  // but if have used this method to increment "setCounter((prevState) => prevState + 1)" then it would have worked normally. or just pass the counter in dependency array in useCallback function.
  const myCallback = useCallback(getIncr, [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={myCallback}>Increment</button>
    </>
  );
};

export default CompCallback;

//In our case “prevState” is equal to the previous State, so line by line we increment 0 by 1, 1 by 1, 2 by 1, 3 by 1 => Result: 4
// setCounter((prevState) => prevState + 1);
// setCounter((prevState) => prevState + 1);
// setCounter((prevState) => prevState + 1);
// setCounter((prevState) => prevState + 1);
//----------VS------------
// setCounter(counter + 1);
// setCounter(counter + 1);
// setCounter(counter + 1);
// setCounter(counter + 1);
