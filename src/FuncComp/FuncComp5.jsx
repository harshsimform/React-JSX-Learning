// componentDidMount: The useEffect hook is called with an empty dependency array ([]) to simulate the componentDidMount method. The console.log statement inside the hook will be called once when the component is mounted.

// componentDidUpdate: The useEffect hook is called with the count state variable in its dependency array ([count]) to simulate the componentDidUpdate method. The console.log statement inside the hook will be called every time count is updated.

// shouldComponentUpdate: A custom shouldUpdate function is defined to simulate the shouldComponentUpdate method. The function takes two parameters, prevProps and nextProps, and returns a boolean value indicating whether the component should update. In this example, the function checks whether someProp has changed and returns true if it has, or false if it hasn't.

// Note that while the useEffect hook can simulate all of the lifecycle methods used in class components, it is important to use it correctly to avoid introducing bugs or performance issues in your app. Make sure to read the documentation carefully and test your code thoroughly.

import React, { useState, useEffect } from "react";

const FuncComp5 = () => {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Component did update");
  }, [count]);

  // shouldComponentUpdate
  function shouldUpdate(prevProps, nextProps) {
    if (prevProps.someProp === nextProps.someProp) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default FuncComp5;
