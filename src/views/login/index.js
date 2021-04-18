import React, { Component } from "react";
import "./styles.css";
import Input from "../../components/base-components/input/index.js";
import { setButton } from "../../routes/navbar/index.js";
import { CustomerLogin } from "../../apis/apis.js";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //updating user credentials
  handleChange(event) {
    let input = this.state.input;

    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    setButton(true);
    const { customer, customerLoggedIn } = CustomerLogin(
      this.state.input["customerId"]
    );

    // input["email"] = event.target.email;
    // input["password"] = event.target.password;
    console.log("Customer details : " + customer + customerLoggedIn);
    // let input = {};
    // this.setState({ input: input });
    // alert("Demo Form is submited");
  }

  render() {
    return (
      <div className="login--page">
        <div className="login--container">
          <form onSubmit={this.handleSubmit}>
            <div className="input--container">
              <Input
                Type="tel"
                Name="customerId"
                PlaceHolder="Phone"
                OnChange={this.handleChange}
                AutoComplete="username"
                Pattern="[0-9]{10}"
                Required="required"
                Title="Please enter a 10 digit phone number"
              />
              <br />

              <Input
                Type="password"
                Name="password"
                PlaceHolder="Password"
                OnChange={this.handleChange}
                AutoComplete="current-password"
                MinLength="6"
                MaxLength="16"
                Required="required"
                Title="Please enter a password"
              />

              <div className="btn--padding">
                <Input Type="submit" Value="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
