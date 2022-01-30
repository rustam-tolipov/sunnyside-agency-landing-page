import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';

const Footer = () => (
  <div className="footer">
    <img className="footer__logo" src={logo} alt="facebook" />
    <div className="footer-content">
      <NavLink className="footer-content__link" to="/About">
        About
      </NavLink>
      <NavLink className="footer-content__link" to="/Services">
        Services
      </NavLink>
      <NavLink className="footer-content__link" to="/Projects">
        Projects
      </NavLink>
    </div>
    <div className="footer-content__social">
      <a href="https://www.facebook.com/rustamxon.tolipov.79/">
        <img className="footer-content__social-icon" src={facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/tolipovrustamxon01/">
        <img className="footer-content__social-icon" src={instagram} alt="instagram" />
      </a>
      <a href="https://www.twitter.com/">
        <img className="footer-content__social-icon" src={twitter} alt="twitter" />
      </a>
      <a href="https://www.pinterest.com/">
        <img className="footer-content__social-icon" src={pinterest} alt="pinterest" />
      </a>
    </div>
  </div>
);

export default Footer;
