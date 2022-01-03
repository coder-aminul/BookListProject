import * as ActionType from "./ActionType";
import axios from "axios";
import { baseURL } from "./baseURL";

export const addComment = (bookId, author, rating, comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    bookId: bookId,
    author: author,
    rating: rating,
    comment: comment,
  },
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
    .then((books) => dispatch(loadBook(books)));
};
