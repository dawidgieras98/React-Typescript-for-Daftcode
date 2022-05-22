import React from "react";
import "./App.css";

const HandleClick = () => {
  alert("Hello React!");
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        </div>
      </header>
    </div>
  );
}

export default App;
