import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
//wrapping react-redux provider around the app componenet allows you to use redux store in components inside App
//must provide a store prop to Provider to indicate the redux store that can be accessed
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
