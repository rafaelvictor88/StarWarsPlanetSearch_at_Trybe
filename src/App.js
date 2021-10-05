import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
// import Header from './components/Header';

function App() {
  return (
    <PlanetProvider>
      <h1>Star Wars Planets Search</h1>
      <Table />
    </PlanetProvider>
  );
}

export default App;
