// @flow
import React, { Fragment, type Node } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import "typeface-roboto";
import store from "./redux/store";

const AppWrapper = ({ children }: { children: Node }) => (
  <Fragment>{children}</Fragment>
);

const App = () => (
  <Provider store={store}>
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  </Provider>
);

ReactDOM.render(<App />, global.document.getElementById("app"));
