import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';

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
    <div>
      <h2>{planetInfo.name}</h2>
      <h2>{planetInfo.terrain}</h2>
      <h2>{planetInfo.diameter}</h2>
      <h2>{planetInfo.climate}</h2>
      {filmesPresentes.title ? (
        <h3>{`${filmesPresentes.title}, episode: ${filmesPresentes.episode} `}</h3>
      ) : (
        <h3>Loading data...</h3>
      )}
    </div>
  );
};

export default Planet;
