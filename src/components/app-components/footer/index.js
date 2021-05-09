import React, { Component } from "react";
import "./styles.css";
import { Button } from "../../base-components/button/index.js";
import Input from "../../base-components/input";
import axios from "axios";
import { sha512 } from "js-sha512";

export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: {},
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.subscribeHandler = this.subscribeHandler.bind(this);
  }

  changeHandler = (event) => {
    let email = this.state.email;
    email[event.target.name] = event.target.value;
    this.setState({
      email,
    });
  };

  subscribeHandler = (event) => {
    event.preventDefault();
    //TODO: Move to API folder
    axios
      .post("http://localhost:8081/subscribe", this.state.email)
      .then((res) => {
        if (res.status === 200) {
          alert(
            "You've successfully subscribed to our newsletters and offers!"
          );
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.status !== 200) {
          alert("Something went wrong!");
        }
      });
  };

  render() {
    return (
      <div className="footer--conatiner">
        <h3 className="footer--heading">WASHIVO</h3>

        <form onSubmit={this.subscribeHandler} className="footer--heading">
          <h2>Subscribe to our newsletters and offers</h2>

          <Input
            Type="text"
            Name="email"
            MinLength="6"
            MaxLength="32"
            OnChange={this.changeHandler}
          />
          <Input Type="submit" Value="Subscribe" />
        </form>
      </div>
    );
  }
  1;
}

export default Footer;
