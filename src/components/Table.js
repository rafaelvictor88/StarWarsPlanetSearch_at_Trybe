import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/MyContext';
import TableHeader from './TableHeader';

const Table = () => {
  const { data } = useContext(MyContext);
  const [filters, setFilters] = useState({});
  const [dataClone, setDataClone] = useState([]);

  const handleChangeInputName = ({ target }) => {
    const inputNameValue = target.value;
    setFilters({ filterByName: {
      name: inputNameValue },
    });
  };

  useEffect(() => {
    setDataClone(data);
  }, [data]);

  useEffect(() => {
    const filterPlanetsByName = data
      .filter((planet) => planet.name.includes(filters.filterByName.name));
    setDataClone(filterPlanetsByName);
  }, [filters]);

  return (
    <div>
      <input
        type="text"
        name="name-filter"
        data-testid="name-filter"
        onChange={ handleChangeInputName }
        placeholder="pesquise pelo nome"
      />
      <table>
        <TableHeader />
        <tbody>
          { (!dataClone.length) ? <p>Carrengando</p> : dataClone
            .map(({
              key,
              name: PlanetName,
              orbital_period: OrbitalPeriod,
              rotation_period: RotationPeriod,
              diameter, climate, gravity, terrain,
              surface_water: SurfaceWater,
              population, films, created, edited, url,
            }) => (
              <tr key={ key }>
                <td>{ PlanetName }</td>
                <td>{ OrbitalPeriod }</td>
                <td>{ RotationPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ SurfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
