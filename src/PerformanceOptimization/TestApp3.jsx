import React, { useState } from "react";
import { useCallback } from "react";
import JustUi3 from "./JustUi3";

const TestApp3 = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const updateCounter = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <p>TestAPP3</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>App</button>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <JustUi3 counter={counter} changeCounter={updateCounter} />
    </div>
  );
};

export default TestApp3;
