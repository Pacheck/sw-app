import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  * {
    margin: 0;
  }

  width: 100vw;
  height: 90vh;
  background-color: #e2d9d9;

  .home::visited {
    color: blue;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h2 className="home">Home</h2>
    </HomeContainer>
  );
};

export default Home;
