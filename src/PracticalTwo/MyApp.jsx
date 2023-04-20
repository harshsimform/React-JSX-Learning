import "./MyApp.css";

const MyApp = () => {
  return (
    <>
      <section>
        <div className="main">
          <div className="card">
            <div className="container">
              <div className="row main-container">
                <div className="col date-status">
                  <span className="date">15</span>
                  <span className="month-year">
                    <span className="month">Jan</span>
                    <p className="year">2023</p>
                  </span>
                </div>
                <div className="col">
                  <p className="day">Monday</p>
                </div>
              </div>
            </div>
            <div className="plus"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyApp;
