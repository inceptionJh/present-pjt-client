import React, { Component } from "react";
import Clock from "../Clock/Clock";
import Wallpaper from "../Wallpaper/Wallpaper";
import Quote from "../Quote/Quote";
import Mantra from "../Mantra/Mantra";
import Login from "../Login/Login";
import Helloyou from "../Helloyou/Helloyou";
import Weather from "../Weather/Weather";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        <Login />
        <Clock />
        <Mantra />
        <Quote />
        <Helloyou />
        <Weather />
      </div>
    );
  }
}

export default App;
