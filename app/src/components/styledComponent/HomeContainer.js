import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100vw;
  height: 90vh;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  /* display: grid; */

  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;

  background-color: transparent;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
  }

  form input {
    width: 15.5rem;
    outline: transparent;
    padding: 0.3rem;
    border-color: transparent;
    box-shadow: 0 0 0.3em black;
  }

  form button {
    margin-top: 0.4rem;
    width: 13rem;
    height: 1.5rem;
    color: black;
  }

  @media (min-width: 400px) {
  }
`;

export default HomeContainer;
