import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import LoginInputComponnent from "../components/loginInput/LoginInput";
import { GetData } from "../services/GetData";
import { PostData } from "../services/PostData";
import "../style/Login.scss";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const subminForm = (e) => {
    e.preventDefault();
    PostData("/user/login", { email, password }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        localStorage.setItem("token", data.accessToken);
        props.userLogin(true);
        return <Redirect to="/printers"></Redirect>;
      }
    });
  };
  return (
    <form className="login-form">
      <img className="logo" alt="logo" src={require("../img/logo.svg")} />
      <span className="project-info">Print Wiki</span>
      <span className="version">BETA</span>
      {error ? <h5 className="errors">{error}</h5> : null}
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
