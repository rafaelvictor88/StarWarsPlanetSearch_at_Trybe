import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';
// import './css/table.css';

function Table() {
  const { state: { data } } = useContext(PlanetContext);

  // console.log(data, 'data no Table');

  const tableHeader = () => (
    data.length === 0
      ? 'carregando'
      : (
        <tr>
          {Object.keys(data[0]).map((planet, index) => (
            <th key={ index }>{planet}</th>))}
        </tr>
      )
  );

  const tableBody = () => (
    data.length === 0
      ? 'carregando'
      : data.map((planet, index) => (
        <tr key={ index }>
          <td>{ planet.name }</td>
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
