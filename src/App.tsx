import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const HandleClick = () => {
  alert("Hello React!");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pierwsze zabawy z Reactem!</p>
        <button onClick={HandleClick}>Click Me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code - Github
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Code
        </a>
      </header>
    </div>
  );
}

export default App;
