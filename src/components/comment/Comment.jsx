import React, { Component } from "react";
import "./comment.scss";

const Comment = (props) => {
  return (
    <div className="comment">
      <img src={require("../../img/users/" + props.user_img)} />
      <div className="usr-name">{props.user}</div>
      <div className="content">{props.content}</div>
      <span className="time">{props.date}</span>
    </div>
  );
};

export default Comment;
