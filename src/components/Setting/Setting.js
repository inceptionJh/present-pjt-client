import React, { Component } from 'react';
import './Setting.css';
// import Toggle from "react-toggle-component";
// import "react-toggle-component/styles.css";

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedState: {
        auth: true,
        clock: true,
        mantra: true,
        quote: true,
        helloyou: true,
        weather: true,
        todo: true
      }
    };
    this.handleCpnChangeState = this.handleCpnChangeState.bind(this);
  }

  handleCpnChangeState(event) {
    this.setState({
      checkedState: this.state.checkedState ? false : true
    });
  }

  render() {
    return (
      <div className="setting">
        {/* mantra */}
        <div className="setting-container">
          <div className="setting-item">Mantra</div>
          <div className="setting-btn">
            <input
              className="apple-switch"
              type="checkbox"
              onChange={this.handleCpnChangeState}
              checked={this.state.checkedState.mantra}
            />
          </div>
        </div>
        {/* quote */}
        <div className="setting-container">
          <div className="setting-item">Quote</div>
          <div className="setting-btn">
            <input
              className="apple-switch"
              type="checkbox"
              onChange={this.handleCpnChangeState}
              checked={this.state.checkedState.quote}
            />
          </div>
        </div>
        {/* new */}
      </div>
    );
  }
}
