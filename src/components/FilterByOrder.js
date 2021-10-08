import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByOrder() {
  const { setState } = useContext(PlanetContext);
  const [filterOrder, setFilterOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  // Função para pegar o target.value dos inputs e setar o estado do componente;
  const handleChange = ({ target }) => {
    if (target.id === 'radio-button-ASC') {
      target.checked = true;
    }
    setFilterOrder({
      ...filterOrder,
      [target.name]: target.value,
    });
  };

  // Função que, após o click, pega o valor do estado local setar o estado geral e realizar a organizção.
  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        filterByNumericValues: [...prevState.filters.filterByNumericValues],
        order: filterOrder,
      },
    }));
  };

  return (
    <div>
      <select onChange={ handleChange } name="column" data-testid="column-sort">
        <option value="name">name</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <br />
      <label htmlFor="radio-button-ASC">
        ASC
        <input
          onChange={ handleChange }
          data-testid="column-sort-input-asc"
          id="radio-button-ASC"
          type="radio"
          value="ASC"
          name="sort"
          checked={ (filterOrder.sort === 'ASC') }
        />
      </label>
      <label htmlFor="radio-button-DESC">
        DESC
        <input
          onChange={ handleChange }
          data-testid="column-sort-input-desc"
          id="radio-button-DESC"
          type="radio"
          value="DESC"
          name="sort"
          checked={ (filterOrder.sort === 'DESC') }
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
}

export default FilterByOrder;
