import React, { Component } from 'react';
import CarController from '../car-controller';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>First title of app</h1>
        <CarController/>
      </div>
    );
  }
}

export default App;
