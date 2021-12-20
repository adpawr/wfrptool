import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {createAttributes, changeRolledValue, currentValue} from './services/wfrp/attributes'

function App() {
  useEffect(() => {
    let attributes = createAttributes('dwarf');
    attributes = changeRolledValue(attributes, 'WP', 17)
    console.log(currentValue(attributes.find(el=>el.attribute==='WP')));

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
