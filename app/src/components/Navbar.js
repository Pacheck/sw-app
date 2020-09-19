import React from 'react';
import { Link } from 'react-router-dom';

//components
import Home from './Home';
import Nav from './styledComponent/Navbar.js';

const Navbar = () => {
  return (
    <Nav>
      <h3>
        <Link to="/">Planetas</Link>
      </h3>
      <h3>Detalhes</h3>
    </Nav>
  );
};

export default Navbar;
