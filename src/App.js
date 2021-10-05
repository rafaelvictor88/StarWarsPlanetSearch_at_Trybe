import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import Header from './components/Header';
import FilterByName from './components/FilterByName';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <FilterByName />
      <Table />
    </PlanetProvider>
  );
}

export default App;
