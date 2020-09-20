import React from 'react';

const Planet = ({ planetInfo }) => {
  return (
    <div>
      <h2>{planetInfo.name}</h2>
      <h2>{planetInfo.climate}</h2>
      <h2>{planetInfo.diameter}</h2>
      <h2>{planetInfo.terrain}</h2>
    </div>
  );
};

export default Planet;
