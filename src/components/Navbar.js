import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <nav className="nav-container">
    <div>
      <FontAwesomeIcon icon={faCaretLeft} className="facaretleft-icon bar-items" />
    </div>
    <div>
      <NavLink to="/" className="bar-items">STORES</NavLink>
    </div>
    <div className="Navbar-icon">
      <FontAwesomeIcon icon={faMicrophone} className="famicrophone-icon bar-items" />
      <FontAwesomeIcon icon={faGear} className="fagear-icon bar-items" />
    </div>
  </nav>
);

export default Navbar;
