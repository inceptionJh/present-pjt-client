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
      container: 'setting-container-v',
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
    this.settingClick = this.settingClick.bind(this);
  }

  handleCpnChangeState(event) {
    const { SettingActions } = this.props;

    SettingActions.setting_clock_disable();
    console.log(event.target);
    this.setState({
      checkedState: this.state.checkedState ? false : true
    });
  }

  settingClick() {
    if (this.state.container === 'setting-container-v') {
      this.setState({
        container: 'setting-container-x'
      });
    } else {
      this.setState({
        container: 'setting-container-v'
      });
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.container}>
          {/* mantra */}
          <div className="setting">
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
          </div>
          {/* new */}
        </div>

        <div className="button-2" onClick={this.settingClick}>
          <a>Setting</a>
          <div className="eff-2" />
        </div>
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
