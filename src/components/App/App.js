import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from '../Weather/Weather';
import Auth from '../Auth/Auth';
import Clock from '../Clock/Clock';
import Wallpaper from '../Wallpaper/Wallpaper';
import Mantra from '../Mantra/Mantra';
import Quote from '../Quote/Quote';
import Helloyou from '../Helloyou/Helloyou';
import Todo from '../Todo/Todo';
import Login from '../Login/Login';
// import userRegisterReducer from '../../reducers/userRegister';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallpaper />
        {this.props.userRegister.isRegistered ? (
          <div>
            <Auth />
            <Clock />
            <Mantra />
            <Quote />
            <Helloyou />
            <Weather />
            <Todo />
          </div>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return {
    user: state.user,
    userRegister: state.userRegister
  };
}

export default connect(mapStateToProps)(App);