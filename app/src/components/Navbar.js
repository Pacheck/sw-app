import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//components
import Home from './Home';

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  color: white;
  background-color: black;
`;

const Navbar = () => {
  return (
    <Nav>
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <h3>Items</h3>
      <h3>About</h3>
    </Nav>
  );
};

export default Navbar;
