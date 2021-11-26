import { useState } from 'react';
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
            <a href="/About">About</a>
          </li>
          <li className="hamburger_menu__list-item">
            <a href="/Services">Services</a>
          </li>
          <li className="hamburger_menu__list-item">
            <a href="/Projects">Projects</a>
          </li>
          <li className="hamburger_menu__list-item contact">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
