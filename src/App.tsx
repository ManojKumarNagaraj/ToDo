import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { } from './components/button'

import { ThemeProvider } from 'react-jss';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{}}>
        <div></div>
      </ThemeProvider>
    );
  }
}

export default App;
