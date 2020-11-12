import React from "react";
import "./textArea.scss";

const TextArea = (props) => {
  return (
    <div className="text-area">
      <textarea rows="5"></textarea>
      <span>{props.text}</span>
    </div>
  );
};

export default TextArea;
