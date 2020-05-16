import React from "react";
import "../style/SideNav.scss";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-text">
        <div className="logo">
          <img src={require("../img/logo.svg")} />
        </div>
        <ul>
          <li className="selected">
            <span className="title">PRINTERS</span>
            <span className="icon">
              <img src={require("../img/printer.svg")} />
            </span>
          </li>
          <li>
            <span className="title">PRINTERS SETTINGS</span>
            <span className="icon">
              <img src={require("../img/printer_settings.svg")} />
            </span>
          </li>
          <li>
            <span className="title">FILAMENTS</span>
            <span className="icon">
              <img src={require("../img/filament.svg")} />
            </span>
          </li>
          <li>
            <span className="title">FILAMENTS SETTINGS</span>
            <span className="icon">
              <img src={require("../img/filament_settings.svg")} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
