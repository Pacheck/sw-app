import styled from 'styled-components';

const Nav = styled.nav`
  width: 100vw;
  height: 10vh;

  display: flex;

  justify-content: space-evenly;
  align-items: center;

  color: white;

  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.7rem;

  a {
    text-decoration: none;
  }

  a:visited {
    color: white;
    background-color: black;
  }

  /* filter: blur(6px); */

  @media (min-width: 400px) {
    font-size: 1.2rem;
    background-color: transparent;

    h3 {
    }
  }
`;

export default Nav;
