import React from "react";
import CommentForm from "./CommentsForm";
import Showcomments from "./Showcomments";
import { baseURL } from "../../redux/baseURL";

const BookDetails = (props) => {
  return (
    <>
      <div className="book-details">
        <div className="books-image mx-2">
          <img src={baseURL + props.books.imageLink} alt={props.books.title} />
        </div>
        <div className="book-content">
          <h4>{props.books.title}</h4>
          <strong>Writer:{props.books.author}</strong>
          <br />
          <strong>Published On {props.books.year}</strong>
          <p>{props.books.decription}</p>
        </div>
      </div>
      <hr />
      <Showcomments comments={props.comment} />
      <hr />
      <CommentForm bookId={props.books.id} addComment={props.addComment} />
    </>
  );
};
export default BookDetails;
