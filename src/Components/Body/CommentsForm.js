import React, { Component } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.onchangecommentInput = this.onchangecommentInput.bind(this);
    this.onsubmitComment = this.onsubmitComment.bind(this);
  }
  onchangecommentInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onsubmitComment = (event) => {
    event.preventDefault();
    this.props.addComment(
      this.props.bookId,
      this.state.author,
      this.state.rating,
      this.state.comment
    );
    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onsubmitComment}>
          <Row>
            <Col md={9}>
              <Label for="author">Your Name</Label>
              <Input
                type="text"
                name="author"
                placeholder="Your Name"
                valur={this.state.author}
                onChange={this.onchangecommentInput}
              />
            </Col>
            <Col md={3}>
              <Label for="rating">Rating</Label>
              <Input
                type="select"
                name="rating"
                value={this.state.rating}
                onChange={this.onchangecommentInput}
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
              </Input>
            </Col>
            <Col md={12} className="my-2">
              <Label for="comment">Your Feedback</Label>
              <Input
                type="textarea"
                name="comment"
                placeholder="Your Feedback"
                value={this.state.comment}
                onChange={this.onchangecommentInput}
              />
            </Col>
            <Col md={12}>
              <button className="btn btn-primary my-2">Comment</button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
