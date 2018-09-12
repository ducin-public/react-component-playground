import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from './Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Component Playground Demo</h1>
        <p className="App-intro">
          To get started, edit <code>src/examples/component.example.js</code> and save to reload.
        </p>
        <Editor />
      </div>
    );
  }
}

export default App;
