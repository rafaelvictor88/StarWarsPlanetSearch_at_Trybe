import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Table = () => {
  const contextValue = useContext(MyContext);
  console.log(contextValue, 'primeiro');
  const tableValues = contextValue.data;
  console.log(tableValues, 'segundo');

  if (tableValues[0] === undefined) {
    return <p>Carrengando</p>;
  } const makeHeaderTable = Object.keys(tableValues[0])
    .filter((header) => (header !== 'residents'))
    .map((header) => <th key={ header }>{ header }</th>);

  return (
    <div>
      <table>
        <tr>
          { makeHeaderTable }
        </tr>
        <tbody>
          { (!tableValues.length) ? <p>Carrengando</p> : tableValues
            .map((value) => (
              <tr key={ value.key }>
                <td>{ value.name }</td>
                <td>{ value.orbital_period }</td>
                <td>{ value.diameter }</td>
                <td>{ value.climate }</td>
                <td>{ value.gravity }</td>
                <td>{ value.terrain }</td>
                <td>{ value.surface_water }</td>
                <td>{ value.population }</td>
                <td>{ value.films }</td>
                <td>{ value.created }</td>
                <td>{ value.edited }</td>
                <td>{ value.url }</td>
                <td>{ value.rotation_period }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
