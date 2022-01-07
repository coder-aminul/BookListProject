import dateFormat from "dateformat";
import React from "react";
import Loader from "./Loader";

const Showcomments = (props) => {
  if (props.commentIsLoadding) {
    return <Loader />;
  } else {
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
  }
};

export default Showcomments;
