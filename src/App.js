import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <Table />
    </PlanetProvider>
  );
}

export default App;
