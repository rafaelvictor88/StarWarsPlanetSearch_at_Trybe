const planetsFetchApi = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const results = await response.json();
  const filteredData = await results.results.filter((planet) => delete planet.residents);
  console.log(filteredData, 'retorno sem residents');
  return filteredData;
};

export default planetsFetchApi;
