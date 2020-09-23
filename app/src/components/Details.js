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

  // console.log(planetDetails);

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
      <Natives residents={residents} />
    </DetailsContainer>
  );
};

export default Details;
