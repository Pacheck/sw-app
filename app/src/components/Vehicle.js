import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Vehicle = ({ data }) => {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    getVehicle();
  }, []);

  function getVehicle() {
    console.log(data.vehicles);
    if (data.vehicles.length !== 0) {
      data.vehicles.map((carrin) => {
        Axios.get(carrin).then((res) =>
          setVehicle((prevState) => [...prevState, res.data])
        );
      });
    } else {
      console.log('sem money, sem carro');
    }
  }

  console.log(vehicle);

  return (
    <div>
      Vehicles :
      {vehicle ? (
        <div>
          {vehicle.map((carro) => {
            return <p key={carro.url}>{carro.name}</p>;
          })}
        </div>
      ) : (
        <p>potato</p>
      )}
    </div>
  );
};

export default Vehicle;
