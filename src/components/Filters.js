import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { filters, setFilters } = useContext(PlanetContext);

  const handleChangeInputName = ({ target }) => {
    const inputNameValue = target.value;
    setFilters({
      ...filters,
      filterByName:
      { name: inputNameValue } });
  };

  return (
    <div>
      <p>Filters</p>
      <input
        type="text"
        name="name-filter"
        data-testid="name-filter"
        onChange={ handleChangeInputName }
        placeholder="pesquise pelo nome"
      />
    </div>
  );
}

export default Filters;
