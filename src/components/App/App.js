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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        {this.props.userRegister.isSignIn ? (
          <div>
            <Clock />
            <Mantra />
            <Quote />
            <Helloyou />
            <Weather />
            <Todo />
            <Setting />
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
    userRegister: state.userRegister
  };
}

export default connect(mapStateToProps)(App);
