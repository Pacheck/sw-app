import Axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Vehicle = ({ data }) => {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getVehicle();

    return () => {
      isMounted = false;
    };
  }, []);

  function getVehicle() {
    if (data.vehicles.length > 0) {
      data.vehicles.map((carrin) => {
        Axios.get(carrin).then((res) =>
          setVehicle((prevState) => [...prevState, res.data])
        );
      });
    } else {
      setVehicle((prevState) => [{ name: 'unknown' }]);
    }
  }

  // console.log(vehicle);

  return (
    <div>
      {vehicle.map((carro) => {
        return <div key={carro.name}>Vehicles: {carro.name}</div>;
      })}
    </div>
  );
};

export default Vehicle;
