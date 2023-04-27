//? use of memo :- it memorize entire component, and it is High Order Component
// this component should only gets re-rendered when counter props changes because we have passed counter only from parent component and to stop JustUi component from getting re-render when input field changes we have used memo
import React, { memo } from "react";

const JustUi = (props) => {
  const { counter } = props;
  return <div className="just-ui">Counter - {counter}</div>;
};

export default memo(JustUi);
