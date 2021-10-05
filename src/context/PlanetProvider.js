import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import planetsFetchApi from '../services/planetsFetch';

function PlanetProvider({ children }) {
  const INITIAL_STATE = {
    data: [],
    filters: {
      filterByName: {
        name: 'Tatoo',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  };
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    planetsFetchApi(setState);
  }, []);

  const context = {
    state,
  };

  // console.log(state, 'retorno depois de setar o state');

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
