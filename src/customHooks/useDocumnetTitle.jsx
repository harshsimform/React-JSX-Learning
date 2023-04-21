// Custom hook that contains logic, which is same in both DocTitleOne and DocTitleTwo

import { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `${count}`;
  }, [count]);
};

export default useDocumentTitle;
