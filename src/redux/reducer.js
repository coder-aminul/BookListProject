import { combineReducers } from "redux";
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

export const commentReducer = (
  commentState = { isLoading: true, comments: [] },
  action
) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS:
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload,
      };
    case ActionType.COMMENT_LOADDING:
      return {
        ...commentState,
        isLoading: true,
        comments: [],
      };
    case ActionType.ADD_COMMENT:
      let comment = action.payload;
      return {
        ...commentState,
        comment: commentState.comments.concat(comment),
      };
    default:
      return commentState;
  }
};
export const Reducer = combineReducers({
  book: bookReducer,
  comment: commentReducer,
});
