import BOOK from "../Data/BookList";

export const initState = (state = BOOK, action) => {
  return {
    booklist: state,
  };
};
