import "./MyApp.css";

const MyApp = () => {
  return (
    <>
      <section className="main">
        <div className="card container">
          <div className="row date-container container">
            <div className="col date-month-year">
              <span className="date">12</span>
              <span className="month-year">
                Jan<p>2022</p>
              </span>
            </div>
            <div className="col">
              <span className="day">Tuesday</span>
            </div>
          </div>
          <button className="plus">
            <div className="add">
              <p>+</p>
            </div>
          </button>
          <div className="todo-container">
            <div className="todo">
              <div className="todo-list">
                <span>Go To Gym!</span>
                <input type="radio" name="" id="" />
              </div>
              <div className="todo-list">
                <span>Go To Gym!</span>
                <input type="radio" name="" id="" />
              </div>
              <div className="todo-list">
                <span>Go To Gym!</span>
                <input type="radio" name="" id="" />
              </div>
              <div className="todo-list">
                <span>Go To Gym!</span>
                <input type="radio" name="" id="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyApp;

// CSS Modules Not Working!!
// import appStyles from "./MyApp.module.css";

// const MyApp = () => {
//   return (
//     <>
//       <section className={appStyles.main}>
//         <div className={`${appStyles.card} container`}>
//           <div className={`row container ${appStyles.dateContainer}`}>
//             <div className={`col ${appStyles.dateMonthYear}`}>
//               <span className={appStyles.date}>12</span>
//               <span className={appStyles.monthYear}>
//                 Jan<p>2022</p>
//               </span>
//             </div>
//             <div className="col">
//               <span className={appStyles.day}>Tuesday</span>
//             </div>
//           </div>
//           <button className={appStyles.plus}>
//             <div className={appStyles.add}>
//               <p>+</p>
//             </div>
//           </button>
//           <div className={appStyles.todoContainer}>
//             <div className={appStyles.todo}>
//               <div className={appStyles.todoList}>
//                 <span>Go To Gym!</span>
//                 <input type="radio" name="" id="" />
//               </div>
//               <div className={appStyles.todoList}>
//                 <span>Go To Gym!</span>
//                 <input type="radio" name="" id="" />
//               </div>
//               <div className={appStyles.todoList}>
//                 <span>Go To Gym!</span>
//                 <input type="radio" name="" id="" />
//               </div>
//               <div className={appStyles.todoList}>
//                 <span>Go To Gym!</span>
//                 <input type="radio" name="" id="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MyApp;
