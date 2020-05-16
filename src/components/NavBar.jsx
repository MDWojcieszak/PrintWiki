import React from "react";
import "../style/NavBar.scss";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img
          src={require("../img/logo.svg")}
          alt="logo"
          height="100%"
          width="100%"
        ></img>
      </div>
      <div className="toggle-container">
        <span className="toggle-dark-mode">
          <input
            checked={props.darkMode}
            onChange={props.onChange}
            type="checkbox"
            className="darkMode-checkbox"
            id="checkbox"
          />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
