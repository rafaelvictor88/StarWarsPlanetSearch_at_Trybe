import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByName() {
  const { setState } = useContext(PlanetContext);

  const handleNameFilter = ({ target }) => {
    setState((prevState) => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        filterByName: {
          name: target.value,
        },
      },
    }));
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Pesquise pelo nome do planeta:
        <input
          type="text"
          name="name-filter"
          data-testid="name-filter"
          onChange={ handleNameFilter }
        />
      </label>
    </div>
  );
}

export default FilterByName;
