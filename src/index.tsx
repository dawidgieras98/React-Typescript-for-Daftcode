import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ControlledInputs from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <ControlledInputs />
    </div>
  </React.StrictMode>
);

reportWebVitals();
