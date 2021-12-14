import BOOK from "../Data/BookList";
import * as ActionType from "./ActionType";

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

  setTimeout(() => {
    dispatch(loadBook(BOOK));
  }, 1000);
};
