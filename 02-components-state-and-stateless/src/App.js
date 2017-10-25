import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-p">This is Header Component</p>
      </div>
    );
  }
}

class Content extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": "30"
        },
        {
          "id": 2,
          "name": "John",
          "age": "35"
        },
        {
          "id": 3,
          "name": "Frank",
          "age": "40"
        },
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          This is Content Component
        </h1>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data="person"/> )}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
