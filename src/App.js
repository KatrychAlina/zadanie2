import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const imie = 'Alina';
  const nazwisko = 'Katrych';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Imię: {imie}
        </p>
        <p>
          Nazwisko: {nazwisko}
        </p>
      </header>
    </div>
  );
}

export default App;

