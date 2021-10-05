import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import Header from './components/Header';
import FilterByName from './components/FilterByName';
import FilterByNumeric from './components/FilterByNumeric';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <FilterByName />
      <FilterByNumeric />
      <Table />
    </PlanetProvider>
  );
}

export default App;
