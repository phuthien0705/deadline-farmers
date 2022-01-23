import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar";
import jwt from "jwt-decode";
import Swal from "sweetalert2";
//const jwt = require("jsonwebtoken");

function LayoutHome(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        const token = JSON.parse(localStorage.getItem("token")).accessToken;
        const decodeToken = jwt(token);
        if (decodeToken.role)
          return (
            <LayoutHome>
              <Component {...propsComponent}></Component>
            </LayoutHome>
          );
        Swal.fire(
          "You do not have permission to access this site!",
          "Press OK to exit!",
          "success"
        );
        return <Redirect to="/" />;
      }}
    ></Route>
  );
}
