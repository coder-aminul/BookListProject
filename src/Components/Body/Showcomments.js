import dateFormat from "dateformat";
import React from "react";

const Showcomments = (props) => {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h4>{comment.author}</h4>
        <small className="comment-date">
          {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
        </small>
        <p>{comment.comment}</p>
        <strong>Rating: {comment.rating}</strong>
      </div>
    );
  });
};

export default Showcomments;
