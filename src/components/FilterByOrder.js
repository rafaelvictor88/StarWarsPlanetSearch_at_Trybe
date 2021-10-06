import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterByOrder() {
  const { setState } = useContext(PlanetContext);
  const [filterOrder, setFilterOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const handleChange = ({ target }) => {
    console.log(target);
    if (target.id === 'radio-button-ASC') {
      target.checked = true;
    }
    setFilterOrder({
      ...filterOrder,
      [target.name]: target.value,
    });
  };

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
      </select>
      <br />
      <label htmlFor="radio-button-ASC">
        ASC
        <input
          onChange={ handleChange }
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
