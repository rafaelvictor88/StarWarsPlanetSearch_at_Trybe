import React from 'react';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <span>Star Wars Planets Search</span>
    </PlanetProvider>
  );
}

export default App;
