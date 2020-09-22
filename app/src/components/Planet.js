import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components

import PlanetsContainer from './styledComponent/PlanetContainer.js';

const Planet = ({ planetInfo }) => {
  const films = planetInfo.films;
  const [filmesPresentes, setFilmesPresentes] = useState([]);

  useEffect(() => {
    getFilmPresentData();
  }, []);

  //Methods

  async function getFilmPresentData() {
    films.map((film) => {
      Axios.get(film)
        .then((res) =>
          setFilmesPresentes({
            title: res.data.title,
            episode: res.data.episode_id,
          })
        )
        .then((err) => console.log('getFilmPresentData axios error ' + err));
    });
  }

  console.log(filmesPresentes);

  return (
    <Link to="/Details">
      <PlanetsContainer>
        <h2>{planetInfo.name}</h2>
        <h2>{planetInfo.terrain}</h2>
        <h2>{planetInfo.diameter}</h2>
        <h2>{planetInfo.climate}</h2>
        {filmesPresentes.title ? (
          <h3>{`${filmesPresentes.title}, episode: ${filmesPresentes.episode} `}</h3>
        ) : (
          <h3>Loading data...</h3>
        )}
      </PlanetsContainer>
    </Link>
  );
};

export default Planet;
