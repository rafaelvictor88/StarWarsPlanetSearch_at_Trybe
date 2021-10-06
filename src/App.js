import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import Header from './components/Header';
import FilterByName from './components/FilterByName';
import FilterByNumeric from './components/FilterByNumeric';
import FilterByOrder from './components/FilterByOrder';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <FilterByName />
      <FilterByOrder />
      <FilterByNumeric />
      <Table />
    </PlanetProvider>
  );
}

export default App;
