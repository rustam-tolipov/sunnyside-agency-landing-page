import React from 'react';
import './Descriptions.css';
import { useMediaQuery } from 'react-responsive';
import transform from '../images/desktop/image-transform.jpg';
import stand from '../images/desktop/image-stand-out.jpg';
import graphic from '../images/desktop/image-graphic-design.jpg';
import graphicMobile from '../images/mobile/image-graphic-design.jpg';
import photography from '../images/desktop/image-photography.jpg';
import photographyMobile from '../images/mobile/image-photography.jpg';

const Descriptions = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="description">
      <div className="card">
        <div className="card-text">
          <div className="card-info">
            <h3 className="card-title">Transform your brand</h3>
            <p className="card-description">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most fo the markiting for you.</p>
            <a className="card-learn-more" href="https://www.brandextract.com/Insights/Articles/Brand-Transformation-What-Why-and-How/">
              Learn More
            </a>
          </div>
        </div>
        <img className="card-img" src={transform} alt="img" />
      </div>
      <div className="card">
        <img className="card-img" src={stand} alt="img" />
        <div className="card-text">
          <div className="card-info">
            <h3 className="card-title">Stand out to the right audience</h3>
            <p className="card-description">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we&apos;ll build and extend your brand in digital places.</p>
            <a className="card-learn-more" href="https://devrix.com/tutorial/tips-grow-audience-stand-out-social-media/">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="img-card">
        <div className="first">
          {isMobile && <img src={graphicMobile} alt="img" />}
          {isDesktop && <img src={graphic} alt="img" />}
          <div className="img-card-text">
            <div className="img-card-info">
              <h3 className="img-card-title">Graphic Design</h3>
              <p className="img-card-description">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clints&apos; attention.</p>
            </div>
          </div>
        </div>
        <div className="second">
          {isDesktop && <img className="card-img" src={photography} alt="img" />}
          {isMobile && <img className="card-img" src={photographyMobile} alt="img" />}
          <div className="img-card-text">
            <div className="img-card-info">
              <h3 className="img-card-title">Photography</h3>
              <p className="img-card-description">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
