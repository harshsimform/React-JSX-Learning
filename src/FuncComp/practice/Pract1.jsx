const Pract1 = () => {
  const ary = [1, 2, 3, 4, 5];
  const mapAry = ary.map((x) => {
    return <li>{x}</li>;
  });
  return (
    <>
      <div className="container">
        <h1>Map</h1>
        <section>{mapAry}</section>
      </div>
    </>
  );
};

export default Pract1;
