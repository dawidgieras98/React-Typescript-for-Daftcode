import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Nav from "./Nav/Nav";
import reportWebVitals from "./reportWebVitals";
import FormInputs from "./Nav/Pages/Form/FormInputs";
import Home from "./Nav/Pages/Home/Home";
import About from "./Nav/Pages/About/About";
import Contact from "./Nav/Pages/Contact/Contact";
import Error from "./Nav/Pages/Error/Error";
//Styles
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<FormInputs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <div className="wrapper"></div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
