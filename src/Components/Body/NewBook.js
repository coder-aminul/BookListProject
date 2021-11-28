import React, { Component } from "react";

class NewBook extends Component {
  render() {
    document.title = "New Book";
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="newbook">
              <h4 className="my-2">New Book</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBook;
