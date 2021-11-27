import React from "react";
import { Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";

const Body = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </div>
  );
};
export default Body;
