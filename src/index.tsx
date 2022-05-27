import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";

//Components
import Nav from "./Nav/Nav";
import FormInputs from "./Nav/Pages/Form/FormInputs";
import reportWebVitals from "./reportWebVitals";

//Styles
import "./index.scss";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <Nav />
      <FormInputs />
    </div>
  </React.StrictMode>
);

reportWebVitals();
