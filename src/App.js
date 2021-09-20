import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import TableHeader from './components/TableHeader';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <h1>Search for a planet from StarWars World</h1>
      <Filters />
      <TableHeader />
      <Table />
    </PlanetProvider>
  );
}

export default App;
