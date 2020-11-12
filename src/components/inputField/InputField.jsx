import React from "react";
import "./inputField.scss";

const InputField = (props) => {
  return (
    <div className="input-field-container">
      <input
        type="text"
        id={props.id}
        onChange={(e) => {
          props.value(e.target.value);
        }}
        name={props.name}
        required
      />
      <label className="label" for={props.name}>
        <span className="content">{props.text}</span>
      </label>
    </div>
  );
};

export default InputField;
