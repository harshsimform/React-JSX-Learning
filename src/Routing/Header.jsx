import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
          <li>
            <NavLink to="/footer">Footer</NavLink>
          </li>
        </ul>
        <hr />
      </nav>
    </>
  );
};

export default Header;
