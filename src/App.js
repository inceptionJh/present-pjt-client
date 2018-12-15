import React, { Component } from "react";
import "./App.css";
import Clock from "./components/Clock/Clock";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import Quote from "./components/Quote/Quote";
import Mantra from "./components/Mantra/Mantra";
import Helloyou from "./components/Helloyou/Helloyou";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        <Clock />
        <Mantra />
        <Quote />
        <Helloyou />
      </div>
    );
  }
}

export default App;
