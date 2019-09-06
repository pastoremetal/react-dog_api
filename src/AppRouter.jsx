// @flow
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home";

const customHistory = createBrowserHistory();

const AppRouter = () => (
  <Router history={customHistory}>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default AppRouter;
