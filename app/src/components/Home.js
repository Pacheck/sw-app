import React, { useState } from 'react';
import HomeContainer from './styledComponent/HomeContainer.js';

const Home = () => {
  const [planetInput, setPlanetInput] = useState('');

  //Methods

  function handleSubmit(e) {
    e.preventDefault();
    console.log(planetInput);
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Find planets by names"
          value={planetInput}
          onChange={(e) => setPlanetInput(e.target.value)}
        />
        <button>Search</button>
      </form>
    </HomeContainer>
  );
};

export default Home;
