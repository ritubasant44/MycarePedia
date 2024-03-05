import React from "react";
import BootstrapCard from "./Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; 

// Custom ButtonGroup component
const ButtonGroup = ({ next, previous }) => {
    const iconStyle = {
      fontSize: '24px', // Adjust the font size as needed
      color: '#007bff', // Change the color to your desired color
      strokeWidth: '1px', // Reduce the font weight
    };
  
    return (
      <div className="custom-button-group" style={{ position: 'absolute', right: '60px', marginTop: '16px'}}>
        <button className="custom-prev-button btnstyles" onClick={previous}>
          <FaAngleLeft style={iconStyle} />
        </button>
        <button className="custom-next-button btnstyles" style={{ marginLeft: '10px' }} onClick={next}>
          <FaAngleRight style={iconStyle} />
        </button>
      </div>
    );
  };

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          id: 1,
          title: "Example Card 1",
          imageUrl: "/images/Rectangle163.png",
          description: "This is an example description 1.",
          recommendation: 'Highly Recommend'
        },
        {
          id: 2,
          title: "Example Card 2",
          imageUrl: "/images/Rectangle165.png",
          description: "This is an example description 2.",
          recommendation: 'Highly Recommend'
        },
        {
          id: 3,
          title: "Example Card 3",
          imageUrl: "/images/Rectangle126.png",
          description: "This is an example description 3.",
          recommendation: 'Highly Recommend'
        },
        {
          id: 4,
          title: "Example Card 4",
          imageUrl: "/images/Rectangle165.png",
          description: "This is an example description 4.",
          recommendation: 'Highly Recommend'
        },
        // Add more card data as needed
      ],
      responsive: {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // Number of cards to slide at a time
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // Number of cards to slide at a time
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // Number of cards to slide at a time
        }
      }
    };
  }

  render() {
    const { cardData, responsive } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{ textAlign: "left" }}>
            <h5 style={{ fontSize: "18px", color: "#00B3D0" }}>
              Featured Doctors
            </h5>
            <h3 className="featured">Find Your Health Match Today</h3>
            <p style={{ fontSize: "13px" }}>
              Find your ideal doctor effortlessly on MyCarePedia's Featured
              Doctors section for top-rated and new healthcare professionals.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel
              responsive={responsive}
              ssr={true} // Server Side Rendering (optional)
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all 1s"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              renderButtonGroupOutside={true} // Render button group outside the carousel container
              customButtonGroup={<ButtonGroup />}
              arrows={false} // Hide default arrows
              className="abc"
            >
              {cardData.map((card) => (
                <div key={card.id} style={{ marginLeft: '-50px', marginRight: '60px' }}>
                  <BootstrapCard
                    title={card.title}
                    recommendation={card.recommendation}
                    imageUrl={card.imageUrl}
                    description={card.description}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
