import * as ActionType from "./ActionType";
import axios from "axios";
import { baseURL } from "./baseURL";

export const addComment = (bookId, author, rating, comment) => (dispathch) => {
  let newComment = {
    bookId: bookId,
    author: author,
    rating: rating,
    comment: comment,
  };
  newComment.date = new Date().toISOString();
  axios
    .post(baseURL + "bookcomments", newComment)
    .then((response) => response.data)
    .then((comment) => dispathch(commentConcat(comment)));
};
export const commentConcat = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: comment,
});
export const loadBook = (book) => ({
  type: ActionType.LOAD_BOOK,
  payload: book,
});
export const bookLoading = () => ({
  type: ActionType.BOOK_LOADING,
});
export const fetchBooks = () => (dispatch) => {
  dispatch(bookLoading());
  axios
    .get(baseURL + "books")
    .then((response) => response.data)
    .then((books) => dispatch(loadBook(books)))
    .catch((error) => console.log(error.message));
};

export const loadComment = (comment) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comment,
});

export const commentLoadding = () => ({
  type: ActionType.COMMENT_LOADDING,
});

export const fetchComments = () => (dispatch) => {
  dispatch(commentLoadding());
  axios
    .get(baseURL + "bookcomments")
    .then((response) => response.data)
    .then((comments) => dispatch(loadComment(comments)))
    .catch((error) => console.log(error.message));
};
