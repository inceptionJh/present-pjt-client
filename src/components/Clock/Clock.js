import './Clock.css';

import React, { Component } from 'react';
import Hour from './Hour/Hour';
import Minute from './Minute/Minute';
import DayAndAmpm from './DayAndAmpm/DayAndAmpm';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      times: {
        date: '00/00/0000',
        hours: '00',
        minutes: '0'
      }
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      times: {
        date: `${new Date().getMonth()} / ${new Date().getDate()} / ${new Date().getFullYear()}`,
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      }
    });
  }

  componentDidMount() {
    this.tick();
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="clock">
        <Hour
          hour={
            Number(this.state.times.hours) < 10
              ? `0${this.state.times.hours}`
              : this.state.times.hours
          }
        />
        :
        <Minute
          minute={
            Number(this.state.times.minutes) < 10
              ? `0${this.state.times.minutes}`
              : this.state.times.minutes
          }
        />
        <DayAndAmpm
          day={this.state.times.date}
          ampm={Number(this.state.times.hours) < 12 ? 'AM' : 'PM'}
        />
      </div>
    );
  }
}
