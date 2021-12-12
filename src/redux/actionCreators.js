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
