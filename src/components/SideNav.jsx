import React from "react";
import "../style/SideNav.scss";

const SideNav = (props) => {
  return (
    <div
      className={props.rolledUp ? "rolled-up side-nav" : "developed side-nav"}
    >
      <div className="side-nav-text">
        <div className="top">
          <img className="logo" src={require("../img/logo.svg")} />
          <img
            id="0"
            onClick={(e) => props.onClick(e)}
            className="bars"
            src={require("../img/bars.svg")}
          />
        </div>
        <ul>
          <li
            className={props.printers ? "selected" : "not-selected"}
            id="1"
            onClick={(e) => props.onClick(e)}
          >
            <span className="title">PRINTERS</span>
            <span className="icon">
              <img src={require("../img/printer.svg")} />
            </span>
          </li>
          <li
            className={props.printersSettings ? "selected" : "not-selected"}
            id="2"
            onClick={(e) => props.onClick(e)}
          >
            <span className="title">PRINTERS SETTINGS</span>
            <span className="icon">
              <img src={require("../img/printer_settings.svg")} />
            </span>
          </li>
          <li
            className={props.filaments ? "selected" : "not-selected"}
            id="3"
            onClick={(e) => props.onClick(e)}
          >
            <span className="title">FILAMENTS</span>
            <span className="icon">
              <img src={require("../img/filament.svg")} />
            </span>
          </li>
          <li
            className={props.filamentsSettings ? "selected" : "not-selected"}
            id="4"
            onClick={(e) => props.onClick(e)}
          >
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
