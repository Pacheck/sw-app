import Axios from 'axios';
const API_URL = 'https://swapi.dev/api/planets';

export const GetAllFuckingPlanets = async (page = 1) => {
  const response = await Axios.get(`${API_URL}/?page=${page}`);

  return response;
};
