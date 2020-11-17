import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoginInputComponnent from "../components/loginInput/LoginInput";
import "../style/Login.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const subminForm = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <form className="login-form">
      <img className="logo" alt="logo" src={require("../img/logo.svg")} />
      <span className="project-info">Print Wiki</span>
      <span className="version">BETA</span>
      <LoginInputComponnent
        id="0"
        type="text"
        name="email"
        placeholder="email"
        value={setEmail}
      />
      <LoginInputComponnent
        id="1"
        type="password"
        name="password"
        placeholder="password"
        value={setPassword}
      />
      <button type="submit" className="submit-btn" onClick={subminForm}>
        Login
      </button>
      <div className="link">
        <a className="forgot-passwd">Forgot password?</a>
        <a> or </a>
        <NavLink to="/sign-up">Sign up</NavLink>
      </div>
    </form>
  );
};

export default SignIn;
