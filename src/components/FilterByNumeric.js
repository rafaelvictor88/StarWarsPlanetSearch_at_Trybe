import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumeric() {
  const { setState } = useContext(PlanetContext);
  const handleClickNumericFilter = () => {
    const columnValue = document.querySelector('.column-filter').value;
    const comparisonValue = document.querySelector('.comparison-filter').value;
    const numericValue = document.querySelector('.numeric-filter').value;
    setState((prevState) => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        filterByNumericValues: [
          ...prevState.filters.filterByNumericValues,
          {
            column: columnValue,
            comparison: comparisonValue,
            value: numericValue,
          }],
      },
    }));
  };

  return (
    <div>
      <select className="column-filter" data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select className="comparison-filter" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        className="numeric-filter"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickNumericFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumeric;
