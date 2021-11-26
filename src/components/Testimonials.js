import React from 'react';
import './Testimonials.css';
import Emily from '../images/image-emily.jpg';
import Jennie from '../images/image-jennie.jpg';
import Thomas from '../images/image-thomas.jpg';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="testimonials__title">CLIENT TESTIMONIALS</h1>
      <div className="testimonials__container">
        <div className="testimonials__card">
          <img className="testimonials__card-image" src={Emily} alt="img" />
          <p className="testimonials__card-text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <div className="testimonials__card-name">
            <h4 className="testimonials__card-name">Emily R.</h4>
            <p className="testimonials__card-position">Marketing Director</p>
          </div>
        </div>
        <div className="testimonials__card">
          <img className="testimonials__card-image" src={Thomas} alt="img" />
          <p className="testimonials__card-text">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfiying and enjoyable experience.</p>
          <div className="testimonials__card-name">
            <h4 className="testimonials__card-name">Thomas S.</h4>
            <p className="testimonials__card-position">Chief Operating Officer</p>
          </div>
        </div>
        <div className="testimonials__card">
          <img className="testimonials__card-image" src={Jennie} alt="img" />
          <p className="testimonials__card-text">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <div className="testimonials__card-name">
            <h4 className="testimonials__card-name">Jennie F.</h4>
            <p className="testimonials__card-position">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
