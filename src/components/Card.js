import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  const style = {
    '--i': props.classVar,
    '--length': '5',
  };

  console.log(style)
  return (
    <div
      className={`card ${props.isActive ? 'expand' : ''}`}
      onClick={props.functionProp}
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.services.image})` }}
      ></div>
      <div className="card-title">{props.services.title}</div>
      {props.isActive && (
        <div className='parent-service'> 
        <div className="service-description" role='list' style={style} >
           <h3>Pricing</h3>
          <p>{props.services.pricing}</p>
          <h3>Benefits</h3>
          <ul>
            {props.services.benefits.map((benefit, index) => (
              <li key={index}> {benefit}</li>
            ))}
          </ul>
        </div>
        </div>
      )}
      <div className={`content ${props.isActive ? 'active' : ''}`}>
        <p className="heading">{props.services.title}</p>
        <p className="para">{props.services.description}</p>
      </div>
    </div>
  );
};

export default Card;
