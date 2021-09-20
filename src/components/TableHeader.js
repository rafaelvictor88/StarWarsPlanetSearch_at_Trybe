import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableHeader() {
  const contextValue = useContext(PlanetContext);
  const tableValues = contextValue.data;

  if (tableValues[0] === undefined) {
    return <p>Carrengando</p>;
  } const makeHeaderTable = Object.keys(tableValues[0])
    .filter((header) => (header !== 'residents'))
    .map((header) => <th key={ header }>{ header }</th>);

  return (
    <div>
      <p>Table header</p>
      <tr>
        { makeHeaderTable }
      </tr>
    </div>
  );
}

export default TableHeader;
