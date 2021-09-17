import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const TableHeader = () => {
  const contextValue = useContext(MyContext);
  const tableValues = contextValue.data;

  if (tableValues[0] === undefined) {
    return <p>Carrengando</p>;
  } const makeHeaderTable = Object.keys(tableValues[0])
    .filter((header) => (header !== 'residents'))
    .map((header) => <th key={ header }>{ header }</th>);

  return (
    <div>
      <tr>
        { makeHeaderTable }
      </tr>
    </div>
  );
};

export default TableHeader;
