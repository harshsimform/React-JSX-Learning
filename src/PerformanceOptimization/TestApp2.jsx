import React, { useState } from "react";
import { useCallback } from "react";
import JustUi2 from "./JustUi2";

const TestApp2 = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  //? Using memo
  // const updateCounter = () => {
  //   setCounter(counter + 1);
  // };

  //? Using useCallback() :- it memorize function/callback function
  // now we need to memoize changeCounter() function. so now after doing that when we will write in input field the JustUi2 will net re-render only when we will click on Add button it will get re-render
  // now this updateCounter() function will only re-define when counter state changes as we have passed counter in dependency array. now the crazy things is that if we don't pass counter in dependency array and leave it as empty, and then when will click on Add button of JustUi component it will only change state from 0 to 1 and then it will not update state. so useCallback() will define the callback function once and as long as array of dependency doesn't get change it will not re-define function again. so must pass dependency in useCallback(() => {},[]) on which callback function relies.
  const updateCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <p>TestAPP2</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>App</button>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <JustUi2 counter={counter} changeCounter={updateCounter} />
    </div>
  );
};

export default TestApp2;
