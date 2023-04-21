// Without Custom Hook
// import { useState } from "react";

// const UserForm = () => {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const submitHandler = (e) => {
//     e.preventDefault();
//     alert(`Hello ${fname} ${lname}`);
//   };
//   return (
//     <>
//       <form onSubmit={submitHandler}>
//         <label htmlFor="fname">First Name</label>
//         <input
//           type="text"
//           name="fname"
//           id="fname"
//           value={fname}
//           onChange={(e) => setFname(e.target.value)}
//         />{" "}
//         <br />
//         <label htmlFor="lname">Last Name</label>
//         <input
//           type="text"
//           name="lname"
//           id="lname"
//           value={lname}
//           onChange={(e) => setLname(e.target.value)}
//         />{" "}
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

// export default UserForm;

// With Custom Hook
import { useState } from "react";
import useInput from "./useInput";

const UserForm = () => {
  //   const [fname, setFname] = useState("");
  //   const [lname, setLname] = useState("");

  const [fname, resetFname, bindFname] = useInput("");
  const [lname, resetLname, bindLname] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${fname} ${lname}`);
    resetFname();
    resetLname();
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" {...bindFname} /> <br />
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" {...bindLname} /> <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserForm;
