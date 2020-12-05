import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GetData } from "../../services/GetData";
import "./navBar.scss";

const NavBar = (props) => {
  if (props.userLogin) {
    return (
      <div className="nav-bar">
        <div className="search"></div>
        {props.user ? (
          <>
            <div className="name">{"Hi " + props.user.name}</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                props.logout();
              }}
            >
              <button className="logout-btn" type="submit">
                Logout
              </button>
            </form>
          </>
        ) : (
          <div>Loading data...</div>
        )}
      </div>
    );
  } else {
    return (
      <div className="nav-bar">
        <div className="search"></div>

        <NavLink to="/sign-in">
          <div className="sign-in-btn">Sign in</div>
        </NavLink>
      </div>
    );
  }
};

export default NavBar;
