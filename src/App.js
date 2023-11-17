import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>prices</h1>
          <div></div>
          <div className="row row-cols-1 row-cols-md-3 text-center">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;