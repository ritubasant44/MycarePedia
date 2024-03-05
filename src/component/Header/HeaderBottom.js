import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

class NavbarBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [],
      activeLink: "Home", // Initially set Home as active
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9090/doctor/common"); // Assuming your API endpoint is at /api/data
      const jsonData = await response.json();
      this.setState({ navLinks: jsonData, loading: false });
      console.log(this.state.rightSectionContent);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  handleNavLinkClick = (title) => {
    this.setState({ activeLink: title });
  };

  render() {
    const { navLinks, activeLink } = this.state;

    return (
      <Navbar bg="#072A5D" variant="dark" expand="lg" className="bottomnav">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#location">
            <img src="/images/location.png" alt="location" />
            <span className="logo-text">
              <span style={{ fontSize: "12px", marginLeft: "7px" }}> Washington DC</span>
            </span>
          </Navbar.Brand>

          {/* Toggler/collapsible Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar links */}
          <Nav className="ms-auto bottomnavlink">
              {navLinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  href={link.href}
                  active={link.title === activeLink}
                  onClick={() => this.handleNavLinkClick(link.title)}
                >
                  {link.title}
                </Nav.Link>
              ))}
            </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarBottom;
