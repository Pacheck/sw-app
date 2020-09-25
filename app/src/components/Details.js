import React, { useState, useEffect } from 'react';

import DetailsContainer from './styledComponent/DetailsContainer.js';
import Natives from './Natives.js';

const Details = (props) => {
  const planetDetails = props.location.state;

  const [nativeList, setNativeList] = useState([]);

  const {
    name,
    orbital_paeriod,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    residents,
  } = props.location.state;

  return (
    <DetailsContainer>
      <h2>Name: {name}</h2>
      <h2>Rotation Period: {rotation_period}</h2>
      <h2>Orbital Period: {orbital_paeriod}</h2>
      <h2>Diameter: {diameter}</h2>
      <h2>Climate: {climate}</h2>
      <h2>Gravity: {gravity}</h2>
      <h2>Terrain: {terrain}</h2>
      <h2>Population: {population}</h2>
      <Natives residents={residents} />
    </DetailsContainer>
  );
};

export default Details;
