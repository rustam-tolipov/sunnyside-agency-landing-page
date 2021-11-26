import React from 'react';
import './Show.css';
import milkbottles from '../images/desktop/image-gallery-milkbottles.jpg';
import cone from '../images/desktop/image-gallery-cone.jpg';
import orange from '../images/desktop/image-gallery-orange.jpg';
import sugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg';

const Show = () => {
  return (
    <div className="our-work">
      <img className="our-work__img" src={milkbottles} alt="img" />
      <img className="our-work__img" src={cone} alt="img" />
      <img className="our-work__img" src={orange} alt="img" />
      <img className="our-work__img" src={sugarcubes} alt="img" />
    </div>
  );
};

export default Show;
