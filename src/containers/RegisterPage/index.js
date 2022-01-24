import React, { useState } from "react";

import axios from "axios";
import "./style/Reset.css";
import "./style/Signup.css";
import signupLogo from "./src/Book lover-bro.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    Full_name: "",
    Phone_number: "",
    Address: "",
    username: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    const form_data = {
      email: user.email,
      username: user.username,
      phone: user.Phone_number,
      address: user.Address,
      fullname: user.Full_name,
      password: user.password,
    };
    try {
      const res = await axios({
        method: "POST",
        url: "http://68.183.224.29:5000/api/v1/auth/register",
        data: form_data,
      });
      localStorage.setItem("firstLogin", true);
      console.log("register success", res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("listCart", JSON.stringify([]));
      Swal.fire({
        width: "400",
        height: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "Success",
        title: "Congratulation. You have successfully registered ^^",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      window.location.href = "/";
    } catch (err) {
      Swal.fire({
        width: "400",
        height: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div class="signup">
      <div class="signup__left">
        <h1 class="signup__title">Sign up</h1>
        <h2 class="signup__desc">Start for free</h2>
        <form onSubmit={registerSubmit} id="signup__form" class="signup__form">
          <div class="signup__information">
            <div class="signup__fullname">
              <label
                htmlFor="fullname"
                class="signup__label signup__label--input"
              >
                Full name
              </label>
              <input
                type="text"
                name="Full_name"
                id="fullname"
                class="signup__input"
                defaultValue={user.Full_name}
                onChange={onChangeInput}
                placeholder="Full name"
              />
            </div>
            <div class="signup__username">
              <label for="username" class="signup__label signup__label--input">
                User name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                class="signup__input"
                placeholder="User name"
                defaultValue={user.name}
                onChange={onChangeInput}
              />
            </div>
            <div class="signup__email">
              <label for="email" class="signup__label signup__label--input">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="signup__input"
                placeholder="Email"
                defaultValue={user.email}
                onChange={onChangeInput}
              />
            </div>
            <div class="signup__password">
              <label for="password" class="signup__label signup__label--input">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                class="signup__input"
                placeholder="Password"
                defaultValue={user.password}
                onChange={onChangeInput}
              />
            </div>
            <div class="signup__phone">
              <label for="phone" class="signup__label signup__label--input">
                Phone number
              </label>
              <input
                type="number"
                name="Phone_number"
                id="phone"
                pattern="[0-9]{4} [0-9]{3} [0-9]{3}"
                placeholder="Phone number"
                class="signup__input"
                defaultValue={user.Phone_number}
                onChange={onChangeInput}
              />
            </div>
            <div class="signup__address">
              <label for="address" class="signup__label signup__label--input">
                Address
              </label>
              <input
                type="text"
                name="Address"
                id="address"
                class="signup__input"
                placeholder="Address"
                defaultValue={user.Address}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div class="signup__term">
            <input
              type="checkbox"
              id="checkbox"
              class="signup__checkbox"
              required
            />
            <label for="checkbox" class="signup__label signup__label--checkbox">
              I've read and agree with Terms of Service and Privacy Policy
            </label>
          </div>
          <button
            type="submit"
            form="signup__form"
            value="Submit"
            class="signup__button"
          >
            Sign up
          </button>
        </form>
        <div class="signup__redirect">
          Already have an account?
          <Link to="../login"> Sign in</Link>
        </div>
      </div>
      <div class="signup__right">
        <img src={signupLogo} alt="" class="signup__image" />
      </div>
    </div>
  );
}

export default RegisterPage;
