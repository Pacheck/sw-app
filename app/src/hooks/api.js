import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const API_URL = 'https://swapi.dev/api/planets';

const GetAllFuckingPlanets = () => {
  useEffect(() => {
    getPlanetData();
  }, []);

  async function getPlanetData(params) {
    const checkedParams = params ? params : '';

    const response = await Axios.get(`${API_URL}/${checkedParams}`);

    return response;
  }

  return getPlanetData;
};

export default GetAllFuckingPlanets;
