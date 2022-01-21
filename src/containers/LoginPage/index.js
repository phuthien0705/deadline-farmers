import React from "react";
import './style/Reset.css';
import './style/Login.css';
import loginImage from './src/Startup life-pana.png';
import RegisterPage from '../RegisterPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__left">
        <h1 className="login__title">Sign in</h1>
        <form autocomplete="off" id="login__form" className="login__form">
            <div className="login__information">
                <div className="login__email">
                    <label for="email" className="login__label login__label--input">Email</label>
                    <input type="email" id="email" className="login__input" required/>
                </div>
                <div className="login__password">
                    <label for="password" className="login__label login__label--input">Password</label>
                    <input type="password" id="password" className="login__input" required/>
                </div>
            </div>
            <button  type="submit" form="login__form"  value="Submit" className="login__button">
              Sign in
            </button>
        </form>
        <div className="login__redirect">
            Not registered yet? 
            <Link to="../register"> Register</Link>
        </div>
      </div>
      <div className="login__right">
        <img src={loginImage} alt="" className="login__image"/>
      </div>
    </div>
    
  );
};
export default LoginPage;
