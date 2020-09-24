import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';

//components
import HomeContainer from './styledComponent/HomeContainer.js';
import Planet from './Planet.js';

const Home = () => {
  const [planetInput, setPlanetInput] = useState('');
  const [allPlanetsList, setAllPlanetsList] = useState([]);

  useEffect(() => {
    getAllPlanets();
  }, []);

  //Methods

  async function getAllPlanets() {
    await Axios.get('https://swapi.dev/api/planets/')
      .then((res) => setAllPlanetsList(res.data.results))
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(allPlanetsList);
  }

  function handlerPlanetClick(planetInfo) {
    console.log(planetInfo);
  }

  function handlePageClick(e) {
    console.log(e.selected);
  }

  return (
    <HomeContainer>
      {/* <form onSubmit={handleSubmit}>
        <input
          placeholder="Find planets by names"
          value={planetInput}
          onChange={(e) => setPlanetInput(e.target.value)}
        />
        <button>Search</button>
      </form>

      <hr
        style={{
          borderTop: '1px solid  #a9a9a9a9',
          marginTop: '10px',
        }}
      /> */}

      {allPlanetsList.map((planet) => {
        return (
          <Planet
            planetInfo={planet}
            key={planet.name}
            handlerPlanetClick={handlerPlanetClick}
          />
        );
      })}
      <ReactPaginate
        onPageChange={handlePageClick}
        pageCount={6}
        pageRangeDisplayed={6}
        marginPagesDisplayed={2}
      />
    </HomeContainer>
  );
};

export default Home;
