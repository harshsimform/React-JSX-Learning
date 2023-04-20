// Problem {count} will get printed infinite time
// import { useEffect } from "react";
// import { useState } from "react";

// const RefExample = () => {
//   const [myData, setMyData] = useState();
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount(count + 1);
//   });
//   return (
//     <>
//       <input
//         type="text"
//         value={myData}
//         onChange={(e) => setMyData(e.target.value)}
//       />
//       <p>{count}</p>
//     </>
//   );
// };
// export default RefExample;

// Solution using useRef() hook
// import { useState, useEffect, useRef } from "react";

// const RefExample = () => {
//   const [myData, setMyData] = useState();
//   //   const [count, setCount] = useState(0);

//   const count = useRef(0);
//   console.log(count);

//   useEffect(() => {
//     // setCount(count + 1);
//     count.current = count.current + 1;
//   }, []);
//   return (
//     <>
//       <input
//         type="text"
//         value={myData}
//         onChange={(e) => setMyData(e.target.value)}
//       />
//       <p>{count.current}</p>
//     </>
//   );
// };

// export default RefExample;

// Accessing DOM elements directly
import { useState, useRef } from "react";

const RefExample = () => {
  const [myData, setMyData] = useState("");
  //   const [count, setCount] = useState(0);

  const inputElem = useRef();

  const changeStyle = () => {
    inputElem.current.style.backgroundColor = "green";
    // console.log(inputElem);
  };

  return (
    <>
      <input
        ref={inputElem}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <button onClick={changeStyle}>Submit</button>
    </>
  );
};

export default RefExample;
