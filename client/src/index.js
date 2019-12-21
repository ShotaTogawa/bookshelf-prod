import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

import Base from "./Base";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";
window.axios = axios;

// const composeEnnhancers =
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // composeEnnhancers(applyMiddleware(reduxThunk))
  applyMiddleware(reduxThunk)
);

if (localStorage.user) {
  const user = JSON.parse(localStorage.user);
  if (user.token) {
    setAuthToken(user.token);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.getElementById("root")
);
