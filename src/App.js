import "./App.css";
import routesHome from "./routes";
import HomeTemplate from "./containers/HomeTemplate";
import PageNotFound from "./containers/PageNotFound";
import LoginPage from "./containers/LoginPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import WebFont from 'webfontloader'
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    })
  }, [])

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
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutesHome(routesHome)}
        <Route path="/login" component={LoginPage}></Route>
        <Route path="" component={PageNotFound}></Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
