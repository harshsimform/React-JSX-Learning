// We can unmount a component by using the useEffect hook with a cleanup function. The cleanup function will be called when the component is unmounted.

// componentWillUnmount: The useEffect hook is called with a function that returns another function to simulate the componentWillUnmount method. The returned function will be called when the component is unmounted, and the console.log statement inside the function will be called at that time.

import React, { useState, useEffect } from "react";

function FuncComp6() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={toggleComponent}>Toggle Component</button>
      {showComponent && <ChildComponent />}
    </div>
  );
}

function ChildComponent() {
  useEffect(() => {
    // Effect function
    console.log("Component mounted");

    // Cleanup function
    // componentWillUnmount
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return <div>Child Component</div>;
}

export default FuncComp6;
