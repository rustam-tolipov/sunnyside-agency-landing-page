import React from 'react';
import './Card.css';

const Card = (props) => (
  <div>
    <div className="text__card">
      <h2>{props}</h2>
      <p>{props}</p>
      <a href={props}>{props}</a>
    </div>
  </div>
);

export default Card;
