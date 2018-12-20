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
        clock: true,
        auth: true,
        mantra: true,
        quote: true,
        helloyou: true,
        weather: true,
        todo: true,
        search: true
      }
    };
    this.handleClockChangeState = this.handleClockChangeState.bind(this);
    this.handleMantraChangeState = this.handleMantraChangeState.bind(this);
    this.handleQuoteChangeState = this.handleQuoteChangeState.bind(this);
    this.handleHelloyouChangeState = this.handleHelloyouChangeState.bind(this);
    this.handleWeatherChangeState = this.handleWeatherChangeState.bind(this);
    this.handleTodoChangeState = this.handleTodoChangeState.bind(this);
    this.handleSearchChangeState = this.handleSearchChangeState.bind(this);

    this.settingClick = this.settingClick.bind(this);
  }

  handleClockChangeState() {
    const { SettingActions } = this.props;

    if (this.state.checkedState.clock) {
      SettingActions.setting_clock_disable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          clock: false
        }
      });
    } else {
      SettingActions.setting_clock_enable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          clock: true
        }
      });
    }
  }

  handleMantraChangeState() {
    const { SettingActions } = this.props;

    if (this.state.checkedState.mantra) {
      SettingActions.setting_mantra_disable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          mantra: false
        }
      });
    } else {
      SettingActions.setting_mantra_enable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          mantra: true
        }
      });
    }
  }

  handleQuoteChangeState() {
    const { SettingActions } = this.props;

    if (this.state.checkedState.quote) {
      SettingActions.setting_quote_disable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          quote: false
        }
      });
    } else {
      SettingActions.setting_quote_enable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          quote: true
        }
      });
    }
  }

  handleHelloyouChangeState() {
    const { SettingActions } = this.props;

    if (this.state.checkedState.helloyou) {
      SettingActions.setting_helloyou_disable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          helloyou: false
        }
      });
    } else {
      SettingActions.setting_helloyou_enable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          helloyou: true
        }
      });
    }
  }

  handleWeatherChangeState() {
    const { SettingActions } = this.props;

    if (this.state.checkedState.weather) {
      SettingActions.setting_weather_disable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          weather: false
        }
      });
    } else {
      SettingActions.setting_weather_enable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          weather: true
        }
      });
    }
  }

  handleTodoChangeState() {
    const { SettingActions } = this.props;

    if (this.state.checkedState.todo) {
      SettingActions.setting_todo_disable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          todo: false
        }
      });
    } else {
      SettingActions.setting_todo_enable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          todo: true
        }
      });
    }
  }

  handleSearchChangeState() {
    const { SettingActions } = this.props;

    if (this.state.checkedState.search) {
      SettingActions.setting_search_disable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          search: false
        }
      });
    } else {
      SettingActions.setting_search_enable();
      this.setState({
        ...this.state,
        checkedState: {
          ...this.state.checkedState,
          search: true
        }
      });
    }
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
          <div className="setting">
            {/* clock */}
            <div className="setting-container">
              <div className="setting-item">Clock</div>
              <div className="setting-btn">
                <input
                  className="apple-switch"
                  type="checkbox"
                  onChange={this.handleClockChangeState}
                  checked={this.state.checkedState.clock}
                />
              </div>
            </div>

            {/* mantra */}
            <div className="setting-container">
              <div className="setting-item">Mantra</div>
              <div className="setting-btn">
                <input
                  className="apple-switch"
                  type="checkbox"
                  onChange={this.handleMantraChangeState}
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
                  onChange={this.handleQuoteChangeState}
                  checked={this.state.checkedState.quote}
                />
              </div>
            </div>

            {/* helloyou */}
            <div className="setting-container">
              <div className="setting-item">Helloyou</div>
              <div className="setting-btn">
                <input
                  className="apple-switch"
                  type="checkbox"
                  onChange={this.handleHelloyouChangeState}
                  checked={this.state.checkedState.helloyou}
                />
              </div>
            </div>

            {/* weather */}
            <div className="setting-container">
              <div className="setting-item">Weather</div>
              <div className="setting-btn">
                <input
                  className="apple-switch"
                  type="checkbox"
                  onChange={this.handleWeatherChangeState}
                  checked={this.state.checkedState.weather}
                />
              </div>
            </div>

            {/* todo */}
            <div className="setting-container">
              <div className="setting-item">To do</div>
              <div className="setting-btn">
                <input
                  className="apple-switch"
                  type="checkbox"
                  onChange={this.handleTodoChangeState}
                  checked={this.state.checkedState.todo}
                />
              </div>
            </div>

            {/* search */}
            <div className="setting-container">
              <div className="setting-item">Search</div>
              <div className="setting-btn">
                <input
                  className="apple-switch"
                  type="checkbox"
                  onChange={this.handleSearchChangeState}
                  checked={this.state.checkedState.search}
                />
              </div>
            </div>
          </div>
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
