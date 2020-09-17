import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;

  background-color: black;
`;

const Navbar = () => {
  return (
    <Nav>
      <h3>Home</h3>
      <h3>Items</h3>
      <h3>About</h3>
    </Nav>
  );
};

export default Navbar;
