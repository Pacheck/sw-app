import Axios from 'axios';
const API_URL = 'https://swapi.dev/api/planets';

export const GetAllFuckingPlanets = () => {
  async function getPlanetData(params) {
    const checkedParams = params ? params : '';

    const response = await Axios.get(`${API_URL}/${checkedParams}`);

    return response;
  }

  return getPlanetData;
};

export default GetAllFuckingPlanets;
