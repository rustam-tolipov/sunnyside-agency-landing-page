import React from 'react';
import './Navbar.css';
import logo from '../images/logo.svg';
import Hamburger from './Hamburger';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const sections = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/About',
    },
    {
      name: 'Services',
      link: '/NotFound',
    },
  ];

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="img" />
      </div>
      {isMobile ? <Hamburger /> : null}
      <ul className="links">
        {sections.map((section) => (
          <NavLink key={section.name} to={section.link}>
            <li className="links--item">{section.name}</li>
          </NavLink>
        ))}
        <NavLink to="/About">
          <button className="button__contact" to="/About">
            CONTACT
          </button>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
