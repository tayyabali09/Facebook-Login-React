import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './compponents/Facebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Facebook Auth</h1>
        </header>
        <p className="App-intro">
          To get started, authenticate with Facebook.
        </p>
        <Facebook />
      </div>
    );
  }
}

export default App;
