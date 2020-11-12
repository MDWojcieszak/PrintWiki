import React from "react";
import "./selectMenu.scss";

const SelectMenu = (props) => {
  return (
    <div className="select-menu">
      <span className="select-menu-name">{props.name}</span>
      <select onChange={(e) => props.value(e.target.options.selectedIndex)}>
        {props.options.map((option, key) => {
          return <option value={key}>{option}</option>;
        })}
      </select>
      <span class="custom-arrow"></span>
      <span className="line"></span>
    </div>
  );
};

export default SelectMenu;
