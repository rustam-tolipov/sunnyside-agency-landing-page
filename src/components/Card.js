import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div>
      <div className="text__card">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a href={props.link}>{props.link}</a>
      </div>
    </div>
  );
};

export default Card;
