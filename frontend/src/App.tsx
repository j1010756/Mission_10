import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Bowlers/BowlerList';

function App() {
  return (
    <div className="App">
      <Header title="Bowling Database Website" />
      <BowlerList />
    </div>
  );
}

export default App;
