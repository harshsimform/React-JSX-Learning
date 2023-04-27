//? Using memo
// now in this component even we have used memo, this component still re-renders when input field changes why so? this is because every time the functional component TestApp2 renders it is creating this method(i.e. updateCounter) again. so this is not a good way to use memo with callback function which we have passed as props in TestApp2 component. we can use "useCallback" here.

// Code-1
import React, { memo } from "react";

const JustUi2 = (props) => {
  const { counter, changeCounter } = props;
  return (
    <>
      <div className="just-ui">Counter - {counter}</div>
      <button onClick={changeCounter}>Add</button>
    </>
  );
};

export default memo(JustUi2);
