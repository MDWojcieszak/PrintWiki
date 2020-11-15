import React from "react";
import "./textArea.scss";

const TextArea = (props) => {
  return (
    <div className="text-area">
      <textarea
        onChange={(e) => {
          props.value(e.target.value);
        }}
        rows="5"
      ></textarea>
      <span>{props.text}</span>
    </div>
  );
};

export default TextArea;
