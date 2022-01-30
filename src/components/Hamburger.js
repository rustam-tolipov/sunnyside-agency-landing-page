import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburger from '../images/icon-hamburger.svg';
import './Hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger_container">
      <button type="button" className="hamburger_button" onClick={handleClick} aria_label="Menu">
        <img src={hamburger} alt="Menu" />
      </button>
      <div className={`hamburger_menu ${isOpen ? 'hamburger_menu--open' : ''}`}>
        <ul className="hamburger_menu__list">
          <li className="hamburger_menu__list-item">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="hamburger_menu__list-item">
            <NavLink to="/Services">Services</NavLink>
          </li>
          <li className="hamburger_menu__list-item">
            <NavLink to="/Projects">Projects</NavLink>
          </li>
          <li className="hamburger_menu__list-item contact">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
