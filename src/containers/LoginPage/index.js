import React, { useState } from "react";

import axios from "axios";
import "./style/Reset.css";
import "./style/Login.css";
import loginImage from "./src/Startup life-pana.png";
import RegisterPage from "../RegisterPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/login", { ...user });
      console.log(res);
      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="login">
      <div className="login__left">
        <h1 className="login__title">Sign in</h1>
        <h2 className="login__desc">Welcome to Deadline Farmers</h2>
        <form
          autoComplete="off"
          id="login__form"
          className="login__form"
          onSubmit={loginSubmit}
        >
          <div className="login__information">
            <div className="login__email">
              <label
                htmlFor="email"
                className="login__label login__label--input"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="login__input"
                required
                placeholder="Email"
                defaultValue={user.email}
                onChange={onChangeInput}
              />
            </div>
            <div className="login__password">
              <label
                htmlFor="password"
                className="login__label login__label--input"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="login__input"
                required
                placeholder="Password"
                defaultValue={user.password}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <button
            type="submit"
            form="login__form"
            value="Submit"
            className="login__button"
          >
            Sign in
          </button>
        </form>
        <div className="login__redirect">
          Not registered yet?
          <Link to="../register"> Register</Link>
        </div>
      </div>
      <div className="login__right">
        <img src={loginImage} alt="" className="login__image" />
      </div>
    </div>
  );
};
export default LoginPage;
