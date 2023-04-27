import { useState, useEffect } from "react";
// Custom Hook
const useApiData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, [url]);

  return data;
};

export default useApiData;
