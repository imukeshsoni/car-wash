import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Signup from "../sign-up/index.js";
import { sha512 } from "js-sha512";

import { login } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correctCredentials, setcorrectCredentials] = useState(true);
  const [userSignUp, setuserSignUp] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  // Set user state in redux with details received from backend
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
      .get("http://localhost:8081/user/get/" + email)
      .then((res) => {
        if (res.data.password === sha512(password)) {
          setUser(res);
          setcorrectCredentials(true);
        } else {
          setcorrectCredentials(false);
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
            <h1>Login here 🚪</h1>
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
            {correctCredentials === false && (
              <p className="warning">Invalid email or password!</p>
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
