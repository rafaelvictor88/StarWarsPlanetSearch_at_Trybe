const planetsFetchApi = async (setState) => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const results = await response.json();
  const filteredData = results.results.filter((planet) => delete planet.residents);
  // console.log(filteredData, 'retorno sem residents');
  setState((prevState) => ({ ...prevState, data: filteredData }));
};

export default planetsFetchApi;
