import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import Wallpaper from './components/Wallpaper/Wallpaper';
import Quote from './components/Quote/Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        <Clock />
        <Quote />
      </div>
    );
  }
}

export default App;
