import React from "react";

const BookItem = (props) => {
  return (
    <div className="card book">
      <img
        src={props.book.imageLink}
        alt={props.book.title}
        className="card-img-top images my-1"
      />
      <div className="card-body">
        <div className="card-title">
          <h4>{props.book.title}</h4>
          <a href="#!" className="btn btn-danger" onClick={props.onbookselect}>
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
