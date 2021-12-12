import React, { Component } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";

class LoginSingup extends Component {
  render() {
    return (
      <div className="login my-2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>Login</h4>
              <Form>
                <Row>
                  <Col md={12} className="my-2">
                    <Input
                      type="text"
                      name="username"
                      placeholder="@username"
                    />
                  </Col>
                  <Col md={12} className="my-2">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Col>
                  <Col>
                    <Button>Login</Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="col-md-6">
              <h4>Singup</h4>
              <Form>
                <Row>
                  <Col md={12} className="my-2">
                    <Input
                      type="text"
                      name="emailnumber"
                      placeholder="email or Number"
                    />
                  </Col>
                  <Col md={12} className="my-2">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </Col>
                  <Col md={12} className="my-2">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Re-type password"
                    />
                  </Col>
                  <Col>
                    <Button>SignUP</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginSingup;
