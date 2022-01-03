import React, { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Col, FormGroup, Label, Row } from "reactstrap";

const required = (value) => value && value.length;
const isNumber = (value) =>
  /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value);
const validEmail = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

class Contact extends Component {
  onSubmit = (values) => {
    console.log(values);
  };
  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact">
              <h4 className="my-2 text-center">Contact Us</h4>
              <LocalForm onSubmit={(values) => this.onSubmit(values)}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="fname" className="my-2">
                        First Name
                      </Label>
                      <Control.text
                        model=".fname"
                        placeholder="First Name"
                        name="fname"
                        className="form-control"
                        validators={{ required }}
                      />
                      <Errors
                        model=".fname"
                        className="text-danger"
                        show="touched"
                        messages={{ required: "Required" }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lname" className="my-2">
                        Last Name
                      </Label>
                      <Control.text
                        model=".lname"
                        placeholder="Last Name"
                        name="lname"
                        className="form-control"
                        validators={{ required }}
                      />
                      <Errors
                        model=".lname"
                        className="text-danger"
                        show="touched"
                        messages={{ required: "Required" }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lname" className="my-2">
                        E-Mail
                      </Label>
                      <Control.text
                        model=".email"
                        placeholder="Email"
                        name="email"
                        className="form-control"
                        validators={{ required, validEmail }}
                      />
                      <Errors
                        model=".email"
                        className="text-danger"
                        show="touched"
                        messages={{
                          required: "Required,",
                          validEmail: "isNot a Valid Email Address",
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone" className="my-2">
                        Mobile (+880)
                      </Label>
                      <Control.text
                        model=".phone"
                        placeholder="+880"
                        name="phone"
                        className="form-control"
                        validators={{ required, isNumber }}
                      />
                      <Errors
                        model=".phone"
                        className="text-danger"
                        show="touched"
                        messages={{
                          required: "Required,",
                          isNumber: "Not Valid Phone Number",
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12} className="my-2">
                    <FormGroup>
                      <Label for="message" className="my-2">
                        Message
                      </Label>
                      <Control.textarea
                        model=".message"
                        placeholder="Type Your Feedback"
                        name="message"
                        className="form-control"
                        validators={{ required }}
                      />
                      <Errors
                        model=".message"
                        className="text-danger"
                        show="touched"
                        messages={{
                          required: "Required,",
                        }}
                      />
                    </FormGroup>
                  </Col>

                  <button className="btn btn-primary btn-block mx-2">
                    Send
                  </button>
                </Row>
              </LocalForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
