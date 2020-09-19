import styled from 'styled-components';

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;

  display: flex;

  justify-content: space-evenly;
  align-items: center;

  color: white;
  background-color: black;

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.7rem;

  a {
    text-decoration: none;
  }

  @media (min-width: 400px) {
    font-size: 1.2rem;
    background-color: red;
  }
`;

export default Nav;
