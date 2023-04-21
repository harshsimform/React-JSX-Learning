import { useState } from "react";
import UserData from "../API/UserData";

const Pract2 = () => {
  const [data, setData] = useState(UserData);
  return (
    <>
      {data.map((curElem) => {
        return (
          <div key={curElem.id}>
            <h5>{curElem.name}</h5>
            <p>{curElem.age}</p>
            <p>{curElem.skill}</p>
          </div>
        );
      })}
    </>
  );
};

export default Pract2;
