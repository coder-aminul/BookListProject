import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
      checkbox: false,
    };
  }
  onchangeInput = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state === "") {
      alert("Fiil Out!");
    } else {
      console.log(this.state);
    }
  };
  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact">
              <h4 className="my-2 text-center">Contact Us</h4>
              <Form onSubmit={this.onSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="fname" className="my-2">
                        First Name
                      </Label>
                      <Input
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.onchangeInput}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lname" className="my-2">
                        Last Name
                      </Label>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        value={this.state.lname}
                        onChange={this.onchangeInput}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lname" className="my-2">
                        E-Mail
                      </Label>
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onchangeInput}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone" className="my-2">
                        Mobile (+880)
                      </Label>
                      <Input
                        type="tel"
                        placeholder="+880"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onchangeInput}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="message" className="my-2">
                        Message
                      </Label>
                      <Input
                        type="textarea"
                        placeholder="Type Your Feedback"
                        name="message"
                        value={this.state.message}
                        onChange={this.onchangeInput}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup className="my-2">
                      <Input
                        type="checkbox"
                        name="checkbox"
                        checked={this.state.checkbox}
                        onChange={this.onchangeInput}
                      />
                      <Label check className="mx-2">
                        Aggree Trams and condition
                      </Label>
                    </FormGroup>
                  </Col>
                  <button className="btn btn-primary btn-block mx-2">
                    Send
                  </button>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
