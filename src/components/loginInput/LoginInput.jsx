import React from "react";
import "./loginInput.scss";

const LoginInputComponnent = (props) => {
  return (
    <div className="login-input">
      <input
        type={props.type}
        id={props.id}
        onChange={(e) => {
          props.value(e.target.value);
        }}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
      {/* <img path={props.icon}></img> */}
    </div>
  );
};

export default LoginInputComponnent;
