import React, { Component } from "react";
import "./App.css";
import Clock from "./components/Clock/Clock";
import Wallpaper from "./components/Wallpaper/Wallpaper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        <Clock />
      </div>
    );
  }
}

export default App;
