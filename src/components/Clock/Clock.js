// @ts-check
import React, { Component } from "react";
import Hour from "./Hour/Hour";
import Minute from "./Minute/Minute";
import DayAndAmpm from "./DayAndAmpm/DayAndAmpm";
import "./Clock.css";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      times: {
        date: "00/00/0000",
        hours: "00",
        minutes: "0"
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
        <Minute
          minute={
            Number(this.state.times.minutes) < 10
              ? `0${this.state.times.minutes}`
              : this.state.times.minutes
          }
        />
        <DayAndAmpm
          day={this.state.times.date}
          ampm={Number(this.state.times.hours) < 12 ? "AM" : "PM"}
        />
      </div>
    );
  }
}

// // @ts-check
// import React, { Component } from "react";
// import DayAndAmpm from "./DayAndAmpm/DayAndAmpm";
// import Hour from "./Hour/Hour";
// import Minute from "./Minute/Minute";
// import "./Clock.css";

// export default class Clock extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hour: "00",
//       minute: "00",
//       day: "00"
//     };
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       const date = new Date();
//       this.setState({
//         hour: date.getHours(),
//         minute: date.getMinutes(),
//         day: date.getDate()
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div className="clock">
//         <Hour hour={this.state.hour} />
//         <Minute minute={this.state.minute} />
//         <DayAndAmpm day={this.state.day} hour={this.state.hour} />
//       </div>
//     );
//   }
// }
