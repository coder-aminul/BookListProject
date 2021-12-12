import React from "react";
import { Route } from "react-router-dom";
import Book from "./Book";
import Contact from "./Contact";
import Home from "./Home";
import LoginSingup from "./LoginandSingup";
import NewBook from "./NewBook";

const Body = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/books" exact component={Book} />
      <Route path="/newbook" exact component={NewBook} />
      <Route path="/login" exact component={LoginSingup} />
    </div>
  );
};
export default Body;
