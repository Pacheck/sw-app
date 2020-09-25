import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components

import PlanetsContainer from './styledComponent/PlanetContainer.js';

const Planet = ({ planetInfo }) => {
  const [filmesPresentes, setFilmesPresentes] = useState({
    title: '',
    episode: '',
  });
  const [detailedInfo, setDetailedInfo] = useState('');

  useEffect(() => {
    getFilmPresentData();
    getPlanetDetailedInfo();
  }, []);

  //Methods

  async function getFilmPresentData() {
    if (planetInfo.films.length > 0) {
      console.log(planetInfo.films);
      planetInfo.films.map((film) => {
        Axios.get(film)
          .then((res) =>
            setFilmesPresentes({
              title: res.data.title,
              episode: res.data.episode_id,
            })
          )
          .catch((err) => console.log(err));
      });
    } else {
      setFilmesPresentes({
        title: 'unknown',
        episode: 'unknown',
      });
    }
  }

  async function getPlanetDetailedInfo() {
    await Axios.get(`https://swapi.dev/api/planets/?search=${planetInfo.name}`)
      .then((res) => {
        const data = res.data.results[0];

        setDetailedInfo(data);
      })
      .catch((err) => console.log('getPLanetDetailedInfo ') + err);
  }

  //arrumar o loading data

  return (
    <Link to={{ pathname: '/Details', state: detailedInfo }}>
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
