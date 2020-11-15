import React from "react";
import "./printer.scss";

const Printer = (props) => {
  return (
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
  );
};

export default Printer;
