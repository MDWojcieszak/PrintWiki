import React from "react";
import "./selectMenu.scss";

const SelectMenu = (props) => {
  return (
    <div className="menu">
      <select>
        {props.options.map((option) => {
          return <option value="1">{option}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectMenu;
