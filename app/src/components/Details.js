import React, { useState, useEffect } from 'react';

import DetailsContainer from './styledComponent/DetailsContainer.js';

const Details = (props) => {
  const [nativeList, setNativeList] = useState([]);

  const planetDetails = props.location.state;
  const {
    name,
    orbital_paeriod,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
  } = props.location.state;

  console.log(planetDetails);

  return (
    <DetailsContainer>
      <h2>{name}</h2>
      <h2>{rotation_period}</h2>
      <h2>{orbital_paeriod}</h2>
      <h2>{diameter}</h2>
      <h2>{climate}</h2>
      <h2>{gravity}</h2>
      <h2>{terrain}</h2>
      <h2>{population}</h2>
      <h2></h2>
    </DetailsContainer>
  );
};

export default Details;
