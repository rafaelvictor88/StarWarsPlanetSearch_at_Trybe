import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanetsApi from '../services/PlanetsApi';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });
  // const [dataClone, setDataClone] = useState([]);

  const handleFetchPlanets = () => {
    fetchPlanetsApi().then((r) => {
      setData(r.results);
    });
  };

  useEffect(() => {
    handleFetchPlanets();
  }, []);

  // useEffect(() => {
  //   setDataClone(data);
  // }, [data]);

  // useEffect(() => {
  //   const filterPlanetsByName = data
  //     .filter((planet) => planet.name.includes(filters.filterByName.name));
  //   setDataClone(filterPlanetsByName);
  // }, [filters]);

  const context = {
    data,
    filters,
    setData,
    setFilters,
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
