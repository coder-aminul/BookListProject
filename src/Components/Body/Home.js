import React from "react";
import Loader from "./Loader";

const Home = () => {
  document.title = "Book List Project";
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="home">
            <h3 className="my-2">Home Components</h3>
            <Loader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
