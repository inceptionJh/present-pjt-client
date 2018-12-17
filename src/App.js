import "./App.css";

import React, { Component } from "react";

import Clock from "./components/Clock/Clock";
import Wallpaper from "./components/Wallpaper/Wallpaper";
import Quote from "./components/Quote/Quote";
import Mantra from "./components/Mantra/Mantra";
import Todo from "./components/Todo/Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        <Clock />
        <Mantra />
        <Quote />
        <Todo />
      </div>
    );
  }
}

export default App;
