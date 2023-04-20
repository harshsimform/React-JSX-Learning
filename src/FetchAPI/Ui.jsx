import { useEffect } from "react";
import { useState } from "react";
import "./Ui.css";

const Ui = () => {
  const [userData, setUserData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => setUserData(data))
  //       .catch((err) => console.error("error", err));
  //   }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await response.json();
      setUserData(data);
      //   console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section>
        {userData.map((item) => (
          <div className="card" key={item.id}>
            <div className="img"></div>
            <span>{item.title}</span>
            <p className="info">{item.body}</p>
            <button>See more...</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Ui;
