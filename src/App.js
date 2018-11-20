import React, { Component } from 'react';
import './App.css';

class App extends Component {

  fetch = () => {
    fetch(`http://9d3034ef-c7be-4b82-bb93-3758b3df6bdb.pub.cloud.scaleway.com/api/v1/car/?format=json`, {
      method:'get'
    }).then(res => res.json())
      .then(response =>console.log(response))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="App">
        <h1>First title of app</h1>
        {this.fetch()}
      </div>
    );
  }
}

export default App;
