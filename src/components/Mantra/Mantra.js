import React, { Component } from 'react';
import './Mantra.css';

const mantras = [
  'Maintain your balance.',
  'The journey itself is home.',
  'Action expresses priorites.',
  'Be present.',
  'Choose joy.',
  'Make a difference.',
  'Be honest.',
  'Be yourself.',
  'Be happy.',
  'Everything you need is within you.',
  'Run your own race.',
  'Be the change.',
  'Start now.',
  'Spread your wings.',
  'Dream big dreams.',
  'Beacsue you can.',
  'Find your calm.',
  'Be fearless.',
  'Remember who you are.'
];

class Mantra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mantra: ''
    };
    this.generateRandomMantra = this.generateRandomMantra.bind(this);
  }

  componentDidMount() {
    this.generateRandomMantra();
    setInterval(() => this.generateRandomMantra(), 5000);
  }

  generateRandomMantra() {
    let index = Math.floor(Math.random() * mantras.length);
    this.setState({
      mantra: mantras[index]
    });
  }

  render() {
    return (
      <div>
        <p className="mantra">{this.state.mantra}</p>
      </div>
    );
  }
}

export default Mantra;
