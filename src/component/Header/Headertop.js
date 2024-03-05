import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Header/Header.css";
// import { CiSearch } from "react-icons/ci";
import Navigationbar from "./Navigationbar";

class HeaderTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto rounded">
              <Navigationbar />
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#login" className="loginbutton">
                <span style={{ color: "#fff" }}>Login/Sign Up</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderTop;
