import React from "react";

class Reputation extends React.Component {

  render() {
    const containerStyle = {
      backgroundImage: `url('/images/Group274.png')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center', // Ensure the background image is centered
      height: '300px',
      borderRadius: '10px',
      position: 'relative',
      marginBottom: '50px',
      marginTop: '125px'
      // Add other styles as needed
    };
    const imagestyle = {
        position: 'absolute',
        left: '117px',
        bottom: '0',
        height: '280px'
    }

    return (
      <div className="container" style={containerStyle}>
        <img src="/images/ctadoc1.png" alt="cta doc" style={imagestyle} />
        <div style={{position: 'absolute', bottom: '73px', right: '346px'}}><a href="abc" className="btn" style={{color: '#04285B'}}>
            explore
        </a></div>
      </div>
    );
  }
}

export default Reputation;
