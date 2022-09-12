import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMessage } from "./CommonUtilities";
import Counter from "./Counter/Counter";
import Main from "./typescriptBasics/Main";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Main />
    </div>
  );
}

export default App;
