import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

//components
import HomeContainer from './styledComponent/HomeContainer.js';

const Home = () => {
  const [planetInput, setPlanetInput] = useState('');
  const [allPlanetsList, setAllPlanetsList] = useState([]);

  useEffect(() => {
    getAllPlanets();
  }, []);

  //Methods

  async function getAllPlanets() {
    await Axios.get('https://swapi.dev/api/planets/')
      .then((res) => setAllPlanetsList(res))
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(allPlanetsList);
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
      <hr style={{ borderTop: '1px solid  #a9a9a9a9', marginTop: '10px' }} />
    </HomeContainer>
  );
};

export default Home;
