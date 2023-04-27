import React, { useState } from "react";
import JustUi from "./JustUi";

const TestApp = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  return (
    <div>
      <p>TestAPP</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>App</button>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <JustUi counter={counter} />
    </div>
  );
};

export default TestApp;
