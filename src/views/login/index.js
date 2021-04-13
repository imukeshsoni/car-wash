import React from "react";
import { Button } from "../../components/base-components/button/index.js";

import "./styles.css";
import Input from "../../components/base-components/input/index.js";

function Login() {
  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div className="login--page">
      <div className="login--container">
        <div className="input--container">
          <Input
            type="email"
            id="email"
            name="email"
            placeHolder="Email/Username"
          />
          <br />

          <Input
            type="password"
            id="password"
            name="password"
            placeHolder="Password"
          />

          <div className="btn--padding">
            <Button
              linkTo="/"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={clickHandler}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
