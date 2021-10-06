import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByNumeric() {
  const { setState, state,
    state: { filters: { filterByNumericValues } } } = useContext(PlanetContext);
  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

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
    // document.getElementById(columnValue).remove();
    setOptions(
      options.filter((option) => option !== columnValue),
    );
  };

  // Função criada com a ajuda do Rogério P. da Silva;
  const handleClickRemoveFilter = (event) => {
    setOptions([
      ...options,
      event.target.id,
    ]);
    setState({
      ...state,
      filters: {
        ...state.filters,
        filterByNumericValues: filterByNumericValues
          .filter((filter) => filter.column !== event.target.id),
      },
    });
  };

  return (
    <div>
      <select id="column-filter" className="column-filter" data-testid="column-filter">
        {options
          .map((option) => (
            <option
              key={ option }
              id={ option }
              value={ option }
            >
              { option }
            </option>
          ))}
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
      <div>
        {!filterByNumericValues.length
          ? <p>nenhum filtro utilizado</p>
          : filterByNumericValues.map(({ column, comparison, value }, index) => {
            if (column) {
              return (
                <li id={ `${column}-index` } key={ index } data-testid="filter">
                  <span>{ column }</span>
                  <span>{ comparison }</span>
                  <span>{ value }</span>
                  <button
                    id={ column }
                    type="button"
                    onClick={ handleClickRemoveFilter }
                  >
                    X
                  </button>
                </li>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
}

export default FilterByNumeric;
