import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';
// import './css/table.css';

function Table() {
  const {
    state: { data,
      filters: {
        filterByName: { name }, filterByNumericValues,
        order: { column: coluna, sort } } } } = useContext(PlanetContext);

  // Função que cria o cabeçalho da tabela;
  const tableHeader = () => (
    (!data.length)
      ? 'carregando'
      : (
        <tr>
          {Object.keys(data[0]).map((planet, index) => (
            <th key={ index }>{planet}</th>))}
        </tr>
      )
  );

  // Função criada a partir do código do Matheus Duarte;
  // https://github.com/tryber/sd-013-a-project-starwars-planets-search/pull/122/files
  const tableSort = () => {
    switch (sort) {
    case 'ASC':
      return data
        .sort(({ [coluna]: a }, { [coluna]: b }) => a.localeCompare(b))
        .sort((a, b) => (a[coluna] - b[coluna]));
    case 'DESC':
      return data
        .sort(({ [coluna]: a }, { [coluna]: b }) => b.localeCompare(a))
        .sort((a, b) => b[coluna] - a[coluna]);
    default:
      return data;
    }
  };

  // Função criada a princípio para fazer o Switch case, refatorada com ajuda do Rogério P da Silva;

  // const handleFilterByNumericValues = (planet) => {
  //   if (!filterByNumericValues.length) return;
  //   const {
  //     column,
  //     comparison,
  //     value } = filterByNumericValues[filterByNumericValues.length - 1];
  //   switch (comparison) {
  //   case 'maior que':
  //     return Number(planet[column]) > Number(value);
  //   case 'menor que':
  //     return Number(planet[column]) < Number(value);
  //   case 'igual a':
  //     console.log(value, planet[column]);
  //     return Number(value) === Number(planet[column]);
  //   default:
  //     return planet;
  //   }
  // };

  // Função cria o corpo da tabela, também executa os filtros por nome e por valores numéricos;
  const tableBody = () => (
    (!data.length)
      ? 'carregando'
      : tableSort()
        .filter((planet) => planet.name.includes(name.toLowerCase()))
        .filter((planet) => {
          if (!filterByNumericValues.length) return planet;
          const {
            column,
            comparison,
            value } = filterByNumericValues[filterByNumericValues.length - 1];
          switch (comparison) {
          case 'maior que':
            return Number(planet[column]) > Number(value);
          case 'menor que':
            return Number(planet[column]) < Number(value);
          case 'igual a':
            return Number(value) === Number(planet[column]);
          default:
            return planet;
          }
        })
        .map((planet, index) => (
          <tr key={ index }>
            <td data-testid="planet-name">{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))
  );

  return (
    <table>
      <thead>
        {tableHeader()}
      </thead>
      <tbody>
        {tableBody()}
      </tbody>
    </table>
  );
}

export default Table;
