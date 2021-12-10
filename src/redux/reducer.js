import { combineReducers } from "redux";
import BOOK from "../Data/BookList";
import COMMENTS from "../Data/Comments";

export const bookReducer = (state = BOOK, action) => {
  return state;
};

export const commentReducer = (state = COMMENTS, action) => {
  return state;
};

export const Reducer = combineReducers({
  book: bookReducer,
  comment: commentReducer,
});
