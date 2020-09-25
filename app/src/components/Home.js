import React, { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';

import './css/Paginator.css';

//components
import HomeContainer from './styledComponent/HomeContainer.js';
import Planet from './Planet.js';

const Home = () => {
  const [planetInput, setPlanetInput] = useState('');
  const [allPlanetsList, setAllPlanetsList] = useState([]);
  const [page, setPage] = useState({
    page: 0,
    pageRange: 0,
  });

  useEffect(() => {
    getAllPlanets();
  }, [page.page]);

  //Methods

  async function getAllPlanets() {
    const pageIndex = page.page === 0 ? 1 : page.page;

    await Axios.get(`https://swapi.dev/api/planets/?page=${pageIndex}`)
      .then((res) => {
        const planetCounter = res.data.count;

        setPage((prevState) => ({
          ...prevState,
          pageRange: planetCounter / 10,
        }));

        setAllPlanetsList(res.data.results);
        // console.log(res.data.results);
      })
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
    setPage((prevState) => ({
      ...prevState,
      page: e.selected + 1,
    }));
    console.log(e.selected);
  }

  console.log(page);

  return (
    <>
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
      </HomeContainer>
      <ReactPaginate
        containerClassName="Pagination"
        onPageChange={handlePageClick}
        pageCount={page.pageRange}
        pageRangeDisplayed={6}
        marginPagesDisplayed={2}
      />
    </>
  );
};

export default Home;
