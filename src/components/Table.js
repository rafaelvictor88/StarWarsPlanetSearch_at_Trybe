import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, filters, dataClone, setDataClone } = useContext(PlanetContext);

  useEffect(() => {
    setDataClone(data);
  }, [data]);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filterPlanetsByName = data
      .filter((planet) => planet.name.toLowerCase().includes(name));
    setDataClone(filterPlanetsByName);
  }, [filters]);

  return (
    <div>
      <p>Table Body</p>
      <table>
        <tbody>
          { (!dataClone.length) ? <p>Carrengando</p> : dataClone.map(({
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
}

export default Table;
