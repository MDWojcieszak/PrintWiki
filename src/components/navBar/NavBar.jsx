import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="search"></div>
      <NavLink to="/sign-in">
        <div className="sign-in-btn">Sign in</div>
      </NavLink>
    </div>
  );
};

export default NavBar;
