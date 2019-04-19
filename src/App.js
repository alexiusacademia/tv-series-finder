import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro/';
import Series from './containers/Series'
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TV Series
          </h1>
        </header>
        <Intro name="Alex" />
        
        <Series />
      </div>
    );
  }
}

export default App;
