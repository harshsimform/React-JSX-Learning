// Usage of Custom Hook
import useApiData from "./useApiData";
const CustomHook4 = () => {
  const data = useApiData("https://jsonplaceholder.typicode.com/users");

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data.map((obj) => {
        return <div key={obj.id}>{obj.name}</div>;
      })}
    </>
  );
};

export default CustomHook4;
