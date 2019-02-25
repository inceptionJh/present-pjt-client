import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from '../Weather/Weather';
import Clock from '../Clock/Clock';
import Wallpaper from '../Wallpaper/Wallpaper';
import Mantra from '../Mantra/Mantra';
import Quote from '../Quote/Quote';
import Helloyou from '../Helloyou/Helloyou';
import Todo from '../Todo/Todo';
import Login from '../Login/Login';
import Setting from '../Setting/Setting';
import Search from '../Search/Search';
// import userRegisterReducer from '../../reducers/userRegister';

class App extends Component {
  render() {
    const {
      isClockEnable,
      isMantraEnable,
      isQuoteEnable,
      isHelloyouEnable,
      isWeatherEnable,
      isTodoEnable,
      isSearchEnable
    } = this.props.setting;

    return (
      <div className="App">
        <Wallpaper />
        {this.props.userRegister.isSignIn ? (
          <div>
            {isClockEnable && <Clock />}
            {isMantraEnable && <Mantra />}
            {isQuoteEnable && <Quote />}
            {isHelloyouEnable && <Helloyou />}
            {isWeatherEnable && <Weather />}
            {isTodoEnable && <Todo />}
            <Setting />
            {isSearchEnable && <Search />}
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userRegister: state.userRegister,
    setting: state.setting
  };
}

export default connect(mapStateToProps)(App);
