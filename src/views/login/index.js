import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

import { login, logout } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  // Set user state in redux with details received from backend
  const setUser = (res) => {
    dispatch(
      login({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        password: res.data.password,
        role: res.data.role,
        username: res.data.username,
        rating: res.data.rating,
        loggedIn: true,
      })
    );
    debugger;
    setEmail("");
    setPassword("");

    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    debugger;
    axios
      .get("http://localhost:8081/user/get/" + email)
      .then((res) => {
        debugger;
        if (res.data.password === password) {
          setUser(res);
        } else {
          alert("Password do not match");
        }
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

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
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit__btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
