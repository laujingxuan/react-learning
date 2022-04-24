import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//must wrap the App component at the root with BrowserRouter components for react-router to work
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
