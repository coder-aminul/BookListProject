import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/style.css";
import MainComponets from "./Components/MainComponents";
import myStore from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponets />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
