import React, { Component } from 'react';
import './Setting.css';
// import Toggle from "react-toggle-component";
// import "react-toggle-component/styles.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingActions from '../../actions/setting';

class Setting extends Component {
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
    const { SettingActions } = this.props;

    SettingActions.setting_clock_disable();
    console.log(event.target);
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

export default connect(
  state => ({
    setting: state.setting
  }),
  dispatch => ({
    SettingActions: bindActionCreators(settingActions, dispatch)
  })
)(Setting);
