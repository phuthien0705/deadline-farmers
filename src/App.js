import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import "./App.css";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import PageNotFound from "./containers/PageNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import WebFont from "webfontloader";
import axios from "axios";

function App() {
  useEffect(() => {
    const timerId = setInterval(() => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token)
        axios({
          method: "POST",
          url: "http://68.183.224.29:5000/api/v1/auth/token",
          body: { refreshToken: token.refreshToken },
        })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", JSON.stringify(res.data.tokens));
            console.log("update token success");
          })
          .catch((error) => {
            console.log(error);
          });
    }, 10800000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
      },
    });
  }, []);

  const renderRoutesHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          ></HomeTemplate>
        );
      });
    }
  };
  const renderRoutesAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        {renderRoutesAdmin(routesAdmin)}
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="" component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
