import React, { Component } from "react";
import TopCard from "../Card";
import { BsArrowUpRight } from 'react-icons/bs';

class SccondSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialities: '',
      find: '',
      explore: ''
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
        specialities: jsonData[1].specialities,
        find: jsonData[1].find,
        explore: jsonData[1].explore
      });
      console.log(this.state.commontext, jsonData[0].health);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  render() {
    return (
      <div className="container" style={{ marginBottom: '50px' }}>
        <h5 style={{ color: "#00B3D0" }}>{this.state.specialities}</h5>
        <h4>{this.state.find}</h4>
        <div style={{ marginTop: "90px" }}>
          <TopCard />
        </div>
        <a href="abc" className="btn btn-primary rounded-pill special">
          {this.state.explore}
          <BsArrowUpRight className="ms-2" />
        </a>
      </div>
    );
  }
}

export default SccondSection;
