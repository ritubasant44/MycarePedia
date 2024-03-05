import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";

class Topsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commontext: [],
      health: "",
      simplify: "",
      find: "",
      arrow: "",
      src: "",
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9090/doctor/commontext"); // Assuming your API endpoint is at /api/data
      const jsonData = await response.json();
      this.setState({ 
        commontext: jsonData, 
        loading: false,
        health: jsonData[0].health,
        simplify: jsonData[0].simplify,
        find: jsonData[0].find,
        arrow: jsonData[0].arrow,
        src: jsonData[0].src
      });
      console.log(this.state.commontext, jsonData[0].health);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  render() {
    return (
      <Row className="container-fluid bg-image justify-content-center align-items-center contentalign">
        <Col xs={12} md={6} className="topbpositionleft">
          <div className="text-center text-md-start">
            <div>
              <img src="/images/topbannerttext.png" alt="topbanner" />
            </div>
            <h6 style={{ fontSize: "33px" }}>
              {this.state.health},<span style={{ color: "#00B3D0" }}> {this.state.simplify}</span>
            </h6>
            <p>
              {this.state.find}
            </p>
            <button type="button" className="btn btn-outline-primary trybutton">
              {this.state.arrow} <BsArrowUpRight className="ms-2" />
            </button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center positionset">
          <img
            src={this.state.src}
            alt="Placeholder"
            className="img-fluid bannerimage"
          />
        </Col>
      </Row>
    );
  }
}

export default Topsection;
