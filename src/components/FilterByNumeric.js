import React from 'react';

function FilterByNumeric() {
  handleClickNumericFilter = () => {};
  return (
    <div>
      <select data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_period">surface_water</option>
      </select>
      <select data-testid="comparison-filter">
        <option value="maior-que">maior que</option>
        <option value="menor-que">menor que</option>
        <option value="igual-a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumeric;
