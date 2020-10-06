import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import './css/Paginator.css';
import getAPI from '../services/api.js';

//components
import HomeContainer from './styledComponent/HomeContainer.js';
import Planet from './Planet.js';
import PlanetListContainer from './styledComponent/PlanetListContainer.js';

const Home = () => {
  const api = getAPI();
  const [planetInput, setPlanetInput] = useState('');
  const [allPlanetsList, setAllPlanetsList] = useState([]);
  const [submitedInfo, setSubmitedInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({
    page: 0,
    pageRange: 0,
  });

  const history = useHistory();

  useEffect(() => {
    getAllPlanets();
    return () => {
      setIsLoading(false);
    };
  }, [page.page]);

  //Methods

  async function getAllPlanets() {
    setIsLoading(true);
    const pageIndex = page.page === 0 ? 1 : page.page;

    const response = await api(`?page=${pageIndex}`);
    console.log(response);

    const planetCounter = response.data.count;

    setPage((prevState) => ({
      ...prevState,
      pageRange: planetCounter / 10,
    }));

    setAllPlanetsList(response.data.results);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (planetInput) {
      setSubmitedInfo(planetInput);
      history.push('/Details', { planetInput: planetInput });
    }
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
  }

  return (
    <>
      <HomeContainer>
        <form onSubmit={handleSubmit}>
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
        />

        <PlanetListContainer>
          {isLoading ? (
            allPlanetsList.map((planet) => {
              return (
                <Planet
                  planetInfo={planet}
                  key={planet.name}
                  handlerPlanetClick={handlerPlanetClick}
                  planetInput={planetInput}
                />
              );
            })
          ) : (
            <h1>.....Loading data</h1>
          )}
        </PlanetListContainer>
      </HomeContainer>
      <ReactPaginate
        containerClassName="Pagination"
        onPageChange={handlePageClick}
        pageCount={page.pageRange}
        pageRangeDisplayed={6}
        marginPagesDisplayed={2}
        initialPage={0}
      />
    </>
  );
};

export default Home;
