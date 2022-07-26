import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/sales">Games less than $5</NavLink>
    </div>
  </nav>
);

export default Navbar;
