import React from "react";
import { createBrowserHistory } from "history";
import { LocalizedRouter } from "./components/LocalizedRouter";
import { Routes as RoutedContent } from "./components/Routes";
import "assets/dist/scss/comm.scss";

export const history = createBrowserHistory();

const App = () => {
  return (
    <LocalizedRouter history={history}>
      <RoutedContent />
    </LocalizedRouter>
  );
};

export default App;
