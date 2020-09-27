import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import PlanetsContainer from './styledComponent/PlanetContainer.js';
import PlanetCard from './styledComponent/PlanetCard.js';

const Planet = ({ planetInfo, planetInput }) => {
  const [filmesPresentes, setFilmesPresentes] = useState({
    title: '',
    episode: '',
  });

  const [filteredFilmsData, setFilteredFilmsData] = useState(
    planetInfo
      ? {
          name: planetInfo.name,
          terrain: planetInfo.terrain,
          diameter: planetInfo.diameter,
          climate: planetInfo.climate,
        }
      : {}
  );
  const [detailedInfo, setDetailedInfo] = useState('');

  useEffect(() => {
    let isMounted = true;

    if (planetInput) {
      getPlanetInputData();
    }

    getFilmPresentData();
    getPlanetDetailedInfo();

    return () => {
      isMounted = false;
    };
  }, []);

  //Methods

  async function getPlanetInputData() {
    const response = await Axios.get(
      `https://swapi.dev/api/planets/?search=${planetInput}`
    );

    console.log(response);

    setFilteredFilmsData(response);
  }

  async function getPlanetDetailedInfo() {
    // const planetName = planetInput ? planetInput : planetInfo.name;
    const planetName = filteredFilmsData.name;

    await Axios.get(`https://swapi.dev/api/planets/?search=${planetName}`)
      .then((res) => {
        const data = res.data.results[0];

        setDetailedInfo(data);
        // console.log(data);
      })
      .catch((err) => console.log('getPLanetDetailedInfo ') + err);
  }

  async function getFilmPresentData() {
    if (planetInfo.films.length > 0) {
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

  //arrumar o loading data

  // console.log(filteredFilmsData);

  return (
    <PlanetCard>
      <Link to={{ pathname: '/Details', state: detailedInfo }}>
        {filmesPresentes.title ? (
          <>
            <h2>{filteredFilmsData.name}</h2>
            <h2>{filteredFilmsData.terrain}</h2>
            <h2>{filteredFilmsData.diameter}</h2>
            <h2>{filteredFilmsData.climate}</h2>
            <h3>{`${filmesPresentes.title}, episode: ${filmesPresentes.episode} `}</h3>
          </>
        ) : (
          <h3>Loading data...</h3>
        )}
      </Link>
    </PlanetCard>
  );
};

export default Planet;
