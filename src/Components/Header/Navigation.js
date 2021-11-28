import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }
  navToggler = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm">
          <div className="container">
            <NavbarToggler onClick={this.navToggler} />
            <NavbarBrand href="/">mybooks</NavbarBrand>
            <Collapse
              navbar
              isOpen={this.state.isNavOpen}
              className="justify-content-end"
            >
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" exact className="nav-link">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/books" exact className="nav-link">
                    Book
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/newbook" exact className="nav-link">
                    NewBook
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact" exact className="nav-link">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
