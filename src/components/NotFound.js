import React from 'react';
import './NotFound.css';
import GoBack from './GoBack';
import underConstruction from '../images/under-construction.mp4';
// Add background video to the page

const NotFound = () => (
  <div className="not-found">
    <video autoPlay loop muted className="not-found__video-container">
      <source src={underConstruction} type="video/mp4" />
    </video>
    <GoBack />
    <h1 className="under__construction_title">This page is under construction</h1>
    <h2 className="under__construction_warning">Please come back later</h2>
  </div>
);

export default NotFound;
