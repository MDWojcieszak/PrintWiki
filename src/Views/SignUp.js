import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ImageUploader from "react-images-upload";
import LoginInputComponnent from "../components/loginInput/LoginInput";
import "../style/Login.scss";
import { DeleteImage, PostImage } from "../services/Image";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [imageName, setImageName] = useState("");

  const subminForm = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  const onImage = async (photo) => {
    if (photo[0] != null) {
      try {
        const data = new FormData();
        data.append("image", photo[0]);
        PostImage(data).then((res) => {
          console.log(res);
          setImagePath("http://localhost:3000" + res.path + res.fileName);
          setImageName(res.fileName);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const changePhoto = (e) => {
    e.preventDefault();
    DeleteImage(imageName).then((res) => {
      console.log(res);
    });
    setImageName("");
    setImagePath("");
  };
  return (
    <form className="login-form">
      <img className="logo" alt="logo" src={require("../img/logo.svg")} />
      <span className="project-info">Print Wiki</span>
      <span className="version">BETA</span>
      <div className="avatar">
        {imagePath === "" ? (
          <>
            <ImageUploader
              className="upload"
              withIcon={false}
              singleImage={true}
              withPreview={false}
              label="Max size 5 MB"
              onChange={onImage}
              buttonText=""
              imgExtension={[".jpg", ".jpeg", ".png"]}
              maxFileSize={1024 * 1024 * 5}
            />
            <img className="plus" alt="plus" src={require("../img/plus.svg")} />
          </>
        ) : (
          <>
            <img className="avatar-image" src={imagePath} />
            <button
              className="change-avatar"
              type="button"
              onClick={changePhoto}
            >
              <img
                className="exit"
                alt="plus"
                src={require("../img/plus.svg")}
              />
            </button>
          </>
        )}
      </div>
      <LoginInputComponnent
        id="0"
        type="text"
        name="name"
        placeholder="name"
        value={setEmail}
      />
      <LoginInputComponnent
        id="1"
        type="text"
        name="email"
        placeholder="email"
        value={setEmail}
      />
      <LoginInputComponnent
        id="2"
        type="password"
        name="password"
        placeholder="password"
        value={setPassword}
      />
      <LoginInputComponnent
        id="3"
        type="password"
        name="confirm password"
        placeholder="confirm password"
        value={setPassword}
      />
      <button type="submit" className="submit-btn" onClick={subminForm}>
        Register
      </button>
      <div className="link">
        <a> Already sign up? </a>
        <NavLink to="/sign-in">Sign in</NavLink>
      </div>
    </form>
  );
};

export default SignUp;
