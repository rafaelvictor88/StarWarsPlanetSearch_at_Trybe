import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumeric() {
  const { setState,
    state: { filters: { filterByNumericValues } } } = useContext(PlanetContext);

  // Função criada para setar o Estado FilterByNumericValues no Estado global da aplicação,
  // também remove o valor do filtro escolhido para não ser utilizado novamente;
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
    document.getElementById(columnValue).remove();
  };

  console.log(filterByNumericValues[0]);

  return (
    <div>
      <select className="column-filter" data-testid="column-filter">
        <option id="population" value="population">population</option>
        <option id="orbital_period" value="orbital_period">orbital_period</option>
        <option id="diameter" value="diameter">diameter</option>
        <option id="rotation_period" value="rotation_period">rotation_period</option>
        <option id="surface_water" value="surface_water">surface_water</option>
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
      {/* <div>
        {Object.keys(filterByNumericValues[0]).length
          ? null
          : filterByNumericValues.map(({ column, comparison, value }) => (
            <div key={ column } data-testid="filter">
              <span>{ column }</span>
              <span>{ comparison }</span>
              <span>{ value }</span>
              <button type="button">x</button>
            </div>
          ))}
      </div> */}
    </div>
  );
}

export default FilterByNumeric;
