import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const { filters, setFilters, handleClickSearch } = useContext(PlanetContext);
  const [colunmFilter, setColunmFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [numberFilter, setNumberFilter] = useState(0);

  const handleInputName = ({ target }) => {
    const inputNameValue = target.value;
    setFilters({
      ...filters,
      filterByName:
        { name: inputNameValue },
    });
  };

  const handleColumnFilter = ({ target }) => {
    const colunmFilterValue = target.value;
    setColunmFilter(colunmFilterValue);
  };

  const handleComparisonFilter = ({ target }) => {
    const comparisonFilterValue = target.value;
    setComparisonFilter(comparisonFilterValue);
  };

  const handleNumberFilter = ({ target }) => {
    const numberFilterValue = target.value;
    setNumberFilter(numberFilterValue);
  };

  // Refatorado com ajuda do João Lima na Monitoria com Summer;
  // Função passada para Provider.js;
  // const handleClickSearch = () => {
  //   // newFilter e 'spread operation' da linha 40, inspirados no código do Gabriel Gaspar;
  //   // link do repositório: https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/32/files?file-filters%5B%5D=.js&file-filters%5B%5D=.jsx&file-filters%5B%5D=.svg
  //   const newFilter = { colunmFilter, comparisonFilter, numberFilter };
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [
  //       ...filters.filterByNumericValues,
  //       newFilter,
  //     ],
  //   });
  // };

  return (
    <div>
      <p>Filters</p>
      <input
        type="text"
        name="name-filter"
        data-testid="name-filter"
        onChange={ handleInputName }
        placeholder="pesquise pelo nome"
      />
      <select
        data-testid="column-filter"
        onChange={ handleColumnFilter }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleComparisonFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value-filter"
        data-testid="value-filter"
        onChange={ handleNumberFilter }
        placeholder="digite um valor"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClickSearch(colunmFilter, comparisonFilter, numberFilter) }
      >
        Pesquisar
      </button>
    </div>
  );
}

export default Filters;
