import React from 'react';

class BootstrapCard extends React.Component {
  render() {
    const { title, imageUrl, description, recommendation } = this.props;

    return (
        <div className="card" style={{ borderRadius: '20px' }}>
        <img src={imageUrl} className="card-img-top" alt="Card" />
        <div className='recomend'>{recommendation}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default BootstrapCard;
