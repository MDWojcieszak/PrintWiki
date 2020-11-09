import React from "react";
import "../style/SideNav.scss";
import { NavLink } from "react-router-dom";

const SideNav = (props) => {
  const [p, setP] = React.useState(false);
  const [ps, setPs] = React.useState(false);
  const [f, setF] = React.useState(false);
  const [fs, setFs] = React.useState(false);
  const [ru, setRu] = React.useState(false);
  function onClick(e) {
    switch (e.currentTarget.id) {
      case "0":
        setRu(!ru);
        break;
      case "1":
        setP(true);
        setPs(false);
        setF(false);
        setFs(false);
        setRu(true);
        break;
      case "2":
        setP(false);
        setPs(true);
        setF(false);
        setFs(false);
        setRu(true);
        break;
      case "3":
        setP(false);
        setPs(false);
        setF(true);
        setFs(false);
        setRu(true);
        break;
      case "4":
        setP(false);
        setPs(false);
        setF(false);
        setFs(true);
        setRu(true);
        break;
      default:
    }
  }
  return (
    <div className={ru ? "rolled-up side-nav" : "developed side-nav"}>
      <div className="side-nav-text">
        <div className="top">
          <img className="logo" alt="logo" src={require("../img/logo.svg")} />
          <img
            alt="menu"
            id="0"
            onClick={(e) => onClick(e)}
            className="bars"
            src={require("../img/bars.svg")}
          />
        </div>
        <ul>
          <NavLink to="/printers">
            <li
              className={p ? "selected" : "not-selected"}
              id="1"
              onClick={(e) => onClick(e)}
            >
              <span className="title">PRINTERS</span>
              <span className="icon">
                <img alt="printers" src={require("../img/printer.svg")} />
              </span>
            </li>
          </NavLink>
          <NavLink to="/printers-settings">
            <li
              className={ps ? "selected" : "not-selected"}
              id="2"
              onClick={(e) => onClick(e)}
            >
              <span className="title">PRINTERS SETTINGS</span>
              <span className="icon">
                <img
                  alt="printers_settings"
                  src={require("../img/printer_settings.svg")}
                />
              </span>
            </li>
          </NavLink>
          <NavLink to="/filaments">
            <li
              className={f ? "selected" : "not-selected"}
              id="3"
              onClick={(e) => onClick(e)}
            >
              <span className="title">FILAMENTS</span>
              <span className="icon">
                <img alt="filaments" src={require("../img/filament.svg")} />
              </span>
            </li>
          </NavLink>
          <NavLink to="/filaments-settings">
            <li
              className={fs ? "selected" : "not-selected"}
              id="4"
              onClick={(e) => onClick(e)}
            >
              <span className="title">FILAMENTS SETTINGS</span>
              <span className="icon">
                <img
                  alt="filaments_settings"
                  src={require("../img/filament_settings.svg")}
                />
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
