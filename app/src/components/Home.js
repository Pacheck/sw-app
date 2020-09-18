import React, { useState } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  * {
    margin: 0;
  }

  width: 100vw;
  height: 90vh;
  background-color: #e2d9d9;

  input {
    background-color: red;
  }
`;

const Home = () => {
  const [planetInput, setPlanetInput] = useState('');

  return (
    <HomeContainer>
      <input
        placeholder="Find planets for names"
        value={planetInput}
        onChange={(e) => setPlanetInput(e.target.value)}
      />
    </HomeContainer>
  );
};

export default Home;
