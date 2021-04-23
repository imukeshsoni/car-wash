import React, { Component } from "react";
import "./styles.css";
import Input from "../../components/base-components/input/index.js";
import { Button } from "../../components/base-components/button/index.js";
import axios from "axios";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleAdmin = this.handleAdmin.bind(this);
  }

  handleAdmin() {
    const data = {
      username: "foo",
      password: "foo",
    };
    axios
      .post("http://localhost:8081/", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="login--page">
        <div className="login--container">
          <Button buttonStyle="btn--outline" onClick={this.handleAdmin}>
            Admin?
          </Button>
          {/* <a href="http://localhost:8081/login">Login</a> */}
        </div>
      </div>
    );
  }
}
