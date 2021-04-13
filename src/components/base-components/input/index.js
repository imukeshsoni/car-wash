import React from "react";
import "./styles.css";

function Input(props) {
  return (
    <input
      className="input--text"
      type={props.type}
      autoComplete={props.autoComplete}
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeHolder}
    />
  );
}

export default Input;
