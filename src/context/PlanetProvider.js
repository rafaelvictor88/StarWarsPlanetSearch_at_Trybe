import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import planetsFetchApi from '../services/planetsFetch';

function PlanetProvider({ children }) {
  const [state, setState] = useState();

  useEffect(() => {
    console.log(planetsFetchApi(), 'retorno no provider');
  }, []);

  const context = {
    state,
  };

  console.log(state);

  return (
    <PlanetContext.Provider value={ context }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
