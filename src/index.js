import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { set_user } from "./modules/user";
import getCookie from "./libs/getCookie";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const token = getCookie("user");
    if (!token) return;
    store.dispatch(set_user(JSON.parse(localStorage.getItem("user"))));
  } catch (e) {
    return;
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
