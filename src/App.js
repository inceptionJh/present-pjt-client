import React, { Component } from "react";
import "./App.css";
import "./components/Clock/Clock";
import Clock from "./components/Clock/Clock";
import Wallpaper from "./components/Wallpaper/Wallpaper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Clock />
        </h1>
        <h1>아이유!!!</h1>
        <Wallpaper />
      </div>
    );
  }
}

export default App;
