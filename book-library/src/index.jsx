import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./components/app/reducer";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

const history = createBrowserHistory();
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
