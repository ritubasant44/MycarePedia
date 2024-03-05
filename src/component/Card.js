import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class ExampleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9090/doctor/topCard"); // Assuming your API endpoint is at /api/data
      const jsonData = await response.json();
      this.setState({ 
        cards: jsonData
      });
      console.log(this.state.cards, jsonData[0].health);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    return (
      <Row>
        {this.state.cards.map((card) => (
          <Col key={card.id} md={3}>
            <Card style={{ width: "100%", position: "relative" }}>
              <div className="circleclass">
                <Card.Img
                  variant="top"
                  src={card.imageSrc}
                  className="cardimage"
                />
              </div>
              <Card.Body style={{ marginTop: "50px", color: '#04285B'}}>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text style={{fontSize: '14px'}}>{card.text}</Card.Text>
                <a href={card.link} className="btn cardbtn">
                  {card.btntext}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default ExampleCard;
