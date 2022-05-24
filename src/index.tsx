import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import  Form from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <Form firstName={""} secondName={""} petName={""} email={""} />
    </div>
  </React.StrictMode>
);

reportWebVitals();
