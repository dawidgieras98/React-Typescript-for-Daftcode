import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import FormInputs from "./FormInputs";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <FormInputs />
    </div>
  </React.StrictMode>
);

reportWebVitals();
