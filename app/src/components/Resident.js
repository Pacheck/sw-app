import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Vehicle from './Vehicle';

const Resident = ({ data }) => {
  const [specie, setSpecie] = useState('');

  useEffect(() => {
    getSpecie();
  }, []);

  function getSpecie() {
    if (data.species.length !== 0) {
      data.species.map((specie) => {
        Axios.get(specie).then((res) => setSpecie(res.data.name));
      });
    } else {
      setSpecie('unknown');
    }
  }

  //   console.log(data);

  return (
    <li key={data.url}>
      {data.name} especie: {specie}
      <Vehicle data={data} />
    </li>
  );
};

export default Resident;
