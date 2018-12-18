import React, { Component } from "react";
import "./Setting.css";
// import Toggle from "react-toggle-component";
// import "react-toggle-component/styles.css";

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      cpnState: {
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

  handleCpnChangeState() {
    console.log(!this.state.checked);
    this.setState({
      checked: this.state.checked ? false : true
    });
  }

  render() {
    return (
      <div className="setting">
        <div className="setting-container">
          <div className="setting-item">Setting</div>
          <div>
            <input
              className="apple-switch"
              type="checkbox"
              onChange={this.handleCpnChangeState}
              checked={this.state.checked}
            />
          </div>
        </div>
        {/* <Toggle label="Click me" /> */}
      </div>
    );
  }
}
