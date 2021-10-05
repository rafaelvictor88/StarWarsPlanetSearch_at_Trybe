import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { state } = useContext(PlanetContext);

  console.log(state, 'data no Table');
  return (
    <table>
      <tr>
        {}
      </tr>
    </table>
  );
}

// Table.propTypes = {

// };

export default Table;
