import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchPlanetsApi from '../services/PlanetsApi';

const Provider = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchPlanetsApi()
      .then((r) => (
        setData(r.results)
      ));
  }, []);

  return (
    <MyContext.Provider value={ { data } }>
      {children}
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
