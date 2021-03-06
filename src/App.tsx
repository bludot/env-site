import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <code style={{ background: "rgb(30, 30, 30)", padding: "0.5em" }}>{
          JSON.stringify(window.CONFIG, null, 2)
        }</code>
      </header>
    </div>
  );
}

export default App;
