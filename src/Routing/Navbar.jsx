// "NavLink" is used to get which link is active, it adds class attribute to link tag
import { Outlet } from "react-router-dom";
import "../AppRoute.css";
import Header from "./Header";

const Navbar = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Navbar;
