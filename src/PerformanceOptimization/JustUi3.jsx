//? Using useMemo :- it memorize computed values

import React, { memo, useMemo } from "react";

const JustUi3 = (props) => {
  const { counter, changeCounter } = props;

  //? now you will notice the delay in console, it is taking time to log message because it goes through for loop every time and slows down the process. so the values which takes long computation time to compute, we can memoize this value using useMemo()
  //   let num = 0;
  //   for (let i = 0; i < 500_000_00; i++) {
  //     num++;
  //   }

  //? using useMemo, it will increase performance so noy you will notice in console that the logs are taking less time than without useMemo(), so now for loop will not execute every time because useMemo() has memorized it's value. and we have not passed any dependency because the callback inside useMemo() is depending on anything.

  const num = useMemo(() => {
    let output = 0;
    for (let i = 0; i < 500_000_00; i++) {
      output++;
    }
    return output;
  }, []);

  console.log("Child is rendering");

  return (
    <>
      <div className="just-ui">
        Counter - {num} {counter}
      </div>
      <button onClick={changeCounter}>Add</button>
    </>
  );
};

export default memo(JustUi3);
