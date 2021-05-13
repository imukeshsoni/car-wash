import React, { useState } from "react";
import "./styles.css";
import Login from "../login/index.js";
import axios from "axios";
import { sha512 } from 'js-sha512';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState(0);
  const [userRole, setuserRole] = useState("ROLE_USER");
  const [userLogin, setuserLogin] = useState(false);
  const [userExists, setuserExists] = useState(false);



  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8081/user/get/" + email)
      .then(res => {
        debugger;
        if (res.data !== "") {
          setuserExists(true);
        } else {
          registerUser();
        }
      })
  };

  const registerUser = () => {

    const userData = {
      name: name,
      email: email,
      password: sha512(password),
      phone: phone,
      rating: 0,
      role: userRole,
      username: username,
    }

    axios
      .post("http://localhost:8081/user/create", userData)
      .then((res) => {
        alert("Sign Up success!");

      })
      .catch((err) => {

      });
  }

  //Render Login page if login button clicked else signup page
  if (userLogin) {
    return <Login />;
  } else
    return (
      <div className="login">
        <div className="signup--page">
          <form onSubmit={(e) => handleSignup(e)}>
            <h1>Sign Up Here</h1>
            <input
              type="text"
              value={name}
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              value={username}
              placeholder="Enter your Nick Name"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="number"
              value={phone}
              placeholder="Enter your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="user--roles">
              <input
                className="radio--btn"
                type="radio"
                id="customer"
                name="userType"
                value="ROLE_USER"
                onClick={(e) => setuserRole(e.target.value)}
                checked
              />
              <label htmlFor="customer">Customer</label>

              <input
                className="radio--btn"
                type="radio"
                id="washer"
                name="userType"
                value="ROLE_WASHER"
                onClick={(e) => setuserRole(e.target.value)}
              />
              <label htmlFor="washer">Washer</label>
            </div>
            {userExists && <p className='warning'>User already exists!</p>}


            <button
              type="submit"
              className="submit__btn"
              onClick={(e) => handleSignup(e)}
            >
              Sign Up
            </button>
            <button
              className="sign--up--btn"
              onClick={() => setuserLogin(true)}
            >
              Already have an account?
            </button>
          </form>
        </div>
      </div>
    );
}

export default Signup;
