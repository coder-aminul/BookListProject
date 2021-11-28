import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import BookDetails from "./BookDetails";
import BookItem from "./BookItem";

const mapToPops = (state) => {
  return {
    books: state.booklist,
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
  render() {
    document.title = "Book";
    const menu = this.props.books.map((item) => {
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
      bookselect = <BookDetails books={this.state.selecbook} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="book-list my-2">{menu}</div>
          </div>
        </div>
        <Modal isOpen={this.state.modalOpen} fullscreen="lg">
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

export default connect(mapToPops)(Book);
