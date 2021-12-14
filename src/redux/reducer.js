import { combineReducers } from "redux";
import COMMENTS from "../Data/Comments";
import * as ActionType from "./ActionType";

export const bookReducer = (
  booksState = { isLoading: false, books: [] },
  action
) => {
  switch (action.type) {
    case ActionType.BOOK_LOADING:
      return {
        ...booksState,
        isLoading: true,
        books: [],
      };
    case ActionType.LOAD_BOOK:
      return {
        ...booksState,
        isLoading: false,
        books: action.payload,
      };
    default:
      return booksState;
  }
};

export const commentReducer = (commentState = COMMENTS, action) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      let comments = action.payload;
      comments.id = commentState.length;
      comments.date = new Date().toDateString();
      return commentState.concat(comments);

    default:
      return commentState;
  }
};
export const Reducer = combineReducers({
  book: bookReducer,
  comment: commentReducer,
});
