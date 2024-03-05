import React from "react";
import { BsArrowUpRight } from 'react-icons/bs';

class Benefit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightSectionContent: [],
      providers: []
    };
  }
  componentDidMount() {
    this.fetchData();
    this.fetchDatas();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9090/doctor/benefit"); // Assuming your API endpoint is at /api/data
      const jsonData = await response.json();
      this.setState({ rightSectionContent: jsonData, loading: false });
      console.log(this.state.rightSectionContent);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
   fetchDatas = async () => {
    try {
      const response = await fetch("http://localhost:9090/doctor/featured"); // Assuming your API endpoint is at /api/data
      const jsonData = await response.json();
      this.setState({ providers: jsonData, loading: false });
      console.log(this.state.rightSectionContent);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const paragraphStyle = {
      color: "#000",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "14px",
      position: "absolute",
      top: "185px",
      marginLeft: '75px'
    };

    const descriptionStyle = {
      fontSize: '13px'
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{ textAlign: "left" }}>
            <h6 style={{ fontSize: "13px", color: "#00B3D0" }}>Benefits</h6>
            <p className="benefittwo">How MyCarePedia Makes Your Life Easier</p>
            <img
              src="/images/benefits.png"
              alt="benefit"
              style={{ width: "478px", height: '500px'}}
            />
          </div>
          <div
            className="col-xs-12 col-md-6"
            style={{ textAlign: "left", position: "relative" }}
          >
            <div className="row" style={paragraphStyle}>
              <div className="col-12">
                <div
                  className="py-1 px-3"
                  style={{
                    borderRadius: "5px",
                    width: "130px",
                    background: `linear-gradient(to right, #00A7DC, #04285B)`,
                    color: "#fff",
                  }}
                >
                  FOR PATIENTS
                </div>
                {this.state.rightSectionContent.map((item, index) => (
                  <div className="row my-3" key={index}>
                    <div className="col-1">
                      <img
                        src={item.image}
                        alt="benefit"
                        style={{ width: "40px" }}
                      />
                    </div>
                    <div className="col-11 mt-2" style={{ paddingLeft: '25px', color: '#04285B' }}>
                      <div className="" style={{ fontWeight: '700' }}>{item.heading}</div>
                      <div className="" style={descriptionStyle}>{item.description}</div>
                    </div>
                  </div>
                ))}
                <div className="row">
                <button type="button" className="btn btn-outline-primary trybuttonbenefit">
              Right Upward Arrow <BsArrowUpRight className="ms-2" />
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For Providers */}
        <div className="row my-5">
        <div
            className="col-xs-12 col-md-6"
            style={{ textAlign: "left", position: "relative" }}
          >
            <div className="row" style={paragraphStyle}>
              <div className="col-12">
                <div
                  className="py-1 px-3"
                  style={{
                    borderRadius: "5px",
                    width: "140px",
                    background: `linear-gradient(to right, #00A7DC, #04285B)`,
                    color: "#fff",
                  }}
                >
                  FOR PROVIDERS
                </div>
                {this.state.providers.map((item, index) => (
                  <div className="row my-3" key={index}>
                    <div className="col-1">
                      <img
                        src={item.image}
                        alt="benefit"
                        style={{ width: "40px" }}
                      />
                    </div>
                    <div className="col-11 mt-2" style={{ paddingLeft: '25px', color: '#04285B' }}>
                      <div className="" style={{ fontWeight: '700' }}>{item.heading}</div>
                      <div className="" style={descriptionStyle}>{item.description}</div>
                    </div>
                  </div>
                ))}
                <div className="row">
                <button type="button" className="btn btn-outline-primary trybuttonbenefit">
              Right Upward Arrow <BsArrowUpRight className="ms-2" />
            </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6" style={{ textAlign: "left" }}>
            <img
              src="/images/providers.png"
              alt="benefit"
              style={{ width: "528px", height: '590px'}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Benefit;
