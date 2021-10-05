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
      : data.map(({
        name, rotation_period, orbital_period,
        diameter, climate, gravity,
        terrain, surface_water, population,
        films, created, edited, url,
      }, index) => (
        <tr key={ index }>
          <td>{ name }</td>
          <td>{ rotation_period }</td>
          <td>{ orbital_period }</td>
          <td>{ diameter }</td>
          <td>{ climate }</td>
          <td>{ gravity }</td>
          <td>{ terrain }</td>
          <td>{ surface_water }</td>
          <td>{ population }</td>
          <td>{ films }</td>
          <td>{ created }</td>
          <td>{ edited }</td>
          <td>{ url }</td>
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
