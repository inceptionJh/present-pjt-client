// @ts-check
import React, { Component } from "react";
import DayAndAmpm from "./DayAndAmpm/DayAndAmpm";
import Hour from "./Hour/Hour";
import Minute from "./Minute/Minute";
import "./Clock.css";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hour: "00",
      minute: "00",
      day: "00"
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date();
      this.setState({
        hour: date.getHours(),
        minute: date.getMinutes(),
        day: date.getDate()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="clock">
        <Hour hour={this.state.hour} />
        <Minute minute={this.state.minute} />
        <DayAndAmpm day={this.state.day} hour={this.state.hour} />
      </div>
    );
  }
}
