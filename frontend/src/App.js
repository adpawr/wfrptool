import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Attributes from './services/wfrp/attributes';
import { setStatsValues } from './services/stats';

function app() {
  useEffect(() => {
    let randomDwarf = Attributes.dwarfBase;
    randomDwarf = Attributes.rollAllStats(randomDwarf);
    randomDwarf = setStatsValues(randomDwarf, { WS: { modifier: -20 } });
    randomDwarf = Attributes.calculateCurrent(randomDwarf);
    console.log(randomDwarf);
    randomDwarf = Attributes.rollStat(randomDwarf, 'WS');
    randomDwarf = Attributes.calculateCurrent(randomDwarf);
    console.log(randomDwarf);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default app;
