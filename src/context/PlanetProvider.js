import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import planetsFetchApi from '../services/planetsFetch';

function PlanetProvider({ children }) {
  // Estado global;
  const INITIAL_STATE = {
    data: [],
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
    },
  };
  const [state, setState] = useState(INITIAL_STATE);

  // ComponentDidMount para setar o estado global com os dados do fetch;
  useEffect(() => {
    planetsFetchApi(setState);
  }, []);

  const context = {
    state,
    setState,
  };

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
