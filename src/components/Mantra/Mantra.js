import "./Mantra.css";

import React, { Component } from "react";

const mantras = [
  "Maintain your balance.",
  "The journey itself is home.",
  "Action expresses priorites.",
  "Be present.",
  "Choose joy.",
  "Make a difference.",
  "Be honest.",
  "Be yourself.",
  "Be happy.",
  "Everything you need is within you.",
  "Run your own race.",
  "Be the change.",
  "Start now.",
  "Spread your wings.",
  "Dream big dreams.",
  "Beacsue you can.",
  "Find your calm.",
  "Be fearless.",
  "Remember who you are."
];
const MANTRA_UPDATE_TIME = 5 * 60 * 1000;

class Mantra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mantra: ""
    };
    this.generateRandomMantra = this.generateRandomMantra.bind(this);
  }

  componentDidMount() {
    this.generateRandomMantra();
    setInterval(() => this.generateRandomMantra(), MANTRA_UPDATE_TIME);
  }

  generateRandomMantra() {
    let index = Math.floor(Math.random() * mantras.length);
    this.setState({
      mantra: mantras[index]
    });
  }

  render() {
    return (
      <div className="mantra">
        <p>{this.state.mantra}</p>
      </div>
    );
  }
}

export default Mantra;
