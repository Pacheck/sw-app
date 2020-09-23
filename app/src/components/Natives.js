import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Resident from './Resident';

const Natives = ({ residents }) => {
  const [filteredResidents, setFilteresResidents] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getNativeDetail();
  }, []);

  //Methods

  function getNativeDetail() {
    residents.map(async (resident) => {
      try {
        const res = await Axios.get(resident);
        return setFilteresResidents((prevState) => [...prevState, res]);
      } catch (err) {
        return console.log(err);
      }
    });
  }

  return (
    <ul onClick={() => console.log(filteredResidents)}>
      {filteredResidents.map((resident) => (
        <Resident data={resident.data} key={resident.data.url} />
      ))}
    </ul>
  );
};

export default Natives;
