// we're using useRef to create a mutable reference to the count state variable. We're initializing countRef with the initial value of count.

// The handleClick function is called when the button is clicked, and it mutates the countRef value directly by incrementing it. Then, we call the setCount function with the new value of countRef.current, which updates the state and triggers a re-render of the component.

// Note that this approach should be used sparingly, and only when necessary. In most cases, you should use the useState hook and the update function returned by it to manage state in an immutable way, to ensure the proper functioning of your React components.

import React, { useState, useRef } from "react";

const MutateState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  function handleClick() {
    countRef.current += 1;
    setCount(countRef.current);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default MutateState;
