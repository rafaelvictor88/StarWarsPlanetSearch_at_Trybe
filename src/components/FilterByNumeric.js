import React from 'react';

function FilterByNumeric() {
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

export default FilterByNumeric;
