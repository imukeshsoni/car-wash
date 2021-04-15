import React from "react";
import "./styles.css";

function Input(props) {
  return (
    <input
      className="input--text"
      type={props.Type}
      name={props.Name}
      autoComplete={props.AutoComplete}
      minLength={props.MinLength}
      maxLength={props.MaxLength}
      placeholder={props.PlaceHolder}
      onChange={props.OnChange}
      onSubmit={props.OnSubmit}
      pattern={props.Pattern}
      value={props.Value}
      required={props.Required}
      onInput={props.OnInput}
      onInvalid={props.OnInvalid}
      title={props.Title}
    />
  );
}

export default Input;
