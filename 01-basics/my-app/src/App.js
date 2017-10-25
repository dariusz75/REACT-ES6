import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

      var i = 1;
      var statement = (function myFunction() {
        if (i == 2) {
          return 'True';
        } else {
          return 'False';
        }
      }());
      var myStyle = {
        fontSize: 50,
        color: 'white',
        backgroundColor: 'red'
      };


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{statement}</h1>
        <h1>{2+3}</h1>
        <p style={myStyle}>Hello World!</p>
      </div>
    );
  }
}

export default App;
