import { useState, useEffect } from "react";
import useDocumentTitle from "./useDocumnetTitle";

const DocTitleOne = () => {
  const [count, setCount] = useState(0);
  // Without Custom hook
  // useEffect(() => {
  //   document.title = `${count}`;
  // }, [count]);

  // With Custom hook
  useDocumentTitle(count);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>click - {count}</button>
    </>
  );
};

export default DocTitleOne;
