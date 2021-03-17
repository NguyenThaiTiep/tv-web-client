import { createBrowserHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch, useLocation } from "react-router-dom";
import logo from "../logo.svg";
import "./index.scss";

import { routes, RoutesApp } from "./router";
import { history } from "../service/history";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div className="header"></div>

        <RoutesApp />
        <div className="footer"></div>
      </Router>
    </div>
  );
}

export default App;
