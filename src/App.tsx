import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
        <div className="link-box">
          <a
            className="App-link"
            href="https://github.com/dawidgieras98/First-steps-with-react-typescript"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code - Github
          </a>
          <a
            className="App-link"
            href="https://fascinating-sherbet-65057a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Code
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
