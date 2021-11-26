import React from 'react';
import Navbar from './Navbar';
import arrow from '../images/icon-arrow-down.svg';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="header">
        <h1 className="header__text">WE ARE CREATIVES</h1>
        <span>
          <img src={arrow} alt="arrow-down" />
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
