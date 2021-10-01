import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/PlanetsApi';

const PlanetProvider = ({ children }) => {
  // Estados iniciais:
  // data: Recebe todo o conteúdo vindo do fetch;
  const [data, setData] = useState([]);
  // filters: Recebe os resultados depois de filtrados, por nome e por numeros;
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  // dataClone: Recebe o mesmo conteúdo de "data", sempre que "data" é modificado. Serve para fazer o map() sem precisar mexer no estado principal;
  const [dataClone, setDataClone] = useState([]);

  // Função que chama a função que faz a requisição à API;
  const handleFetchPlanets = () => {
    fetchPlanetsApi().then((r) => {
      setData(r.results);
    });
  };

  // useEffect usado como componentDidMount;
  useEffect(() => {
    handleFetchPlanets();
  }, []);

  const handleClickSearch = (colunmFilter, comparisonFilter, numberFilter) => {
    // newFilter e 'spread operation' da linha 40, inspirados no código do Gabriel Gaspar;
    // link do repositório: https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/32/files?file-filters%5B%5D=.js&file-filters%5B%5D=.jsx&file-filters%5B%5D=.svg
    let newFilter = { colunmFilter, comparisonFilter, numberFilter };
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        newFilter,
      ],
    });
    // Filtro feito com ajuda do João Lima na Monitoria com Summer;
    if (comparisonFilter === 'maior que') {
      const filteredDataClone = dataClone
        .filter((planet) => (planet[colunmFilter] > numberFilter));
      console.log(filteredDataClone, 'maior que');
      newFilter = filteredDataClone;
    }
    if (comparisonFilter === 'menor que') {
      const filteredDataClone = dataClone
        .filter((planet) => (planet[colunmFilter] < numberFilter));
      console.log(filteredDataClone, 'menor que');
      newFilter = filteredDataClone;
    }
    if (comparisonFilter === 'igual a') {
      const filteredDataClone = dataClone
        .filter((planet) => (planet[colunmFilter] === numberFilter));
      console.log(filteredDataClone, 'igual a');
      newFilter = filteredDataClone;
    }
  };

  // useEffect(() => {
  //   setDataClone(filters);
  // }, [filters]);

  const context = {
    data,
    filters,
    dataClone,
    setData,
    setFilters,
    setDataClone,
    handleClickSearch,
  };

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
