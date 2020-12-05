import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./printer.scss";

const Printer = (props) => {
  return (
    <NavLink to={"/printers/" + props.id}>
      <div className="printer">
        <img
          className="image"
          src={"http://localhost:3000" + props.img_path}
        ></img>
        <div className="text">
          <h1 className="name">{props.name}</h1>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Printer;
