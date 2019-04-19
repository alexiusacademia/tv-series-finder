import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
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
        <Main />
      </div>
    );
  }
}

export default App;
