import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMessage } from "./CommonUtilities";
import Counter from "./Counter/Counter";
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
