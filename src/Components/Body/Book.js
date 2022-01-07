import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  addComment,
  fetchBooks,
  fetchComments,
} from "../../redux/actionCreators";
import BookDetails from "./BookDetails";
import BookItem from "./BookItem";
import Loader from "./Loader";

const mapToPops = (state) => {
  return {
    books: state.book,
    comments: state.comment,
  };
};
const mapDispatcToprops = (dispatch) => {
  return {
    addComment: (bookId, author, rating, comment) =>
      dispatch(addComment(bookId, author, rating, comment)),
    fecthBooks: () => dispatch(fetchBooks()),
    fetchComments: () => dispatch(fetchComments()),
  };
};

class Book extends Component {
  state = {
    selecbook: null,
    modalOpen: false,
  };

  onbookSelect = (book) => {
    this.setState({
      selecbook: book,
      modalOpen: !this.state.modalOpen,
    });
  };
  onToggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };
  componentDidMount() {
    this.props.fecthBooks();
    this.props.fetchComments();
  }
  render() {
    console.log(this.props.comments.comments);
    document.title = "Book";
    if (this.props.books.isLoading) {
      return <Loader />;
    } else {
      const menu = this.props.books.books.map((item) => {
        return (
          <BookItem
            book={item}
            key={item.id}
            onbookselect={() => this.onbookSelect(item)}
          />
        );
      });

      let bookselect = null;
      if (this.state.selecbook != null) {
        const comment = this.props.comments.comments.filter((comment) => {
          return comment.bookId === this.state.selecbook.id;
        });
        bookselect = (
          <BookDetails
            books={this.state.selecbook}
            comment={comment}
            addComment={this.props.addComment}
            commentIsloadding={this.props.comments.isLoading}
          />
        );
      }
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="book-list my-2">{menu}</div>
            </div>
          </div>
          <Modal isOpen={this.state.modalOpen} fullscreen="lg">
            <ModalHeader>
              <span className="closeModal" onClick={this.onToggleModal}>
                &times;
              </span>
            </ModalHeader>
            <ModalBody>{bookselect}</ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={this.onToggleModal}>
                Close
              </button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
}

export default connect(mapToPops, mapDispatcToprops)(Book);
