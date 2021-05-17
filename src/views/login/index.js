import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Signup from "../sign-up/index.js";
import { sha512 } from "js-sha512";

import { login } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { getUserById } from "../../apis/urls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userWarning, setuserWarning] = useState(true);
  const [userSignUp, setuserSignUp] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  // Set user state in redux with data received from backend
  const setUser = (res) => {
    const userData = {
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone,
      password: res.data.password,
      role: res.data.role,
      username: res.data.username,
      rating: res.data.rating,
      loggedIn: true,
    };

    dispatch(login(userData));
    setEmail("");
    setPassword("");

    localStorage.setItem("user", JSON.stringify(userData));
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(getUserById + email)
      .then((res) => {
        if (res.data.password === sha512(password)) {
          res.data.status ?
            setUser(res)
            : setuserWarning("User is not acitve yet.");
        } else {
          setuserWarning("Invalid credentials");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (userSignUp) {
    return <Signup />;
  } else
    return (
      <div className="login">
        <div className="login--page">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Log In</h1>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {userWarning && (
              <p className="warning">{userWarning}</p>
            )}

            <button type="submit" className="submit__btn">
              Login
            </button>
            <button className="submit__btn" onClick={() => setuserSignUp(true)}>
              Sign Up?
            </button>
          </form>
        </div>
      </div>
    );
};

export default Login;
