import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import LayoutReducer from "./Redux/LayoutReducer/LayoutReducer";
import DataReducer from "./Redux/DataReducer/DataReducer";

const rootReducer = combineReducers({
  LayoutReducer,
  DataReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
