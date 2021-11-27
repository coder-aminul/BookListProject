import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponets from "./Components/MainComponents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComponets />
      </BrowserRouter>
    </div>
  );
}

export default App;
