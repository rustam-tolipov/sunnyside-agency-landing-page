import React from 'react';
import './NotFound.css';
import GoBack from './GoBack';

const NotFound = () => (
  <div className="not-found">
    <GoBack />
    <h1 className="under__construction_title">This page is under construction</h1>
    <h2 className="under__construction_warning">Please come back later</h2>
  </div>
);

export default NotFound;
