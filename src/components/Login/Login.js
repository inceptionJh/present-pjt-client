import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './Login.css';
import LoginComp from './LoginComp/LoginComp';

class Login extends Component {
  render() {
    let login;
    if (
      !this.props.userRegister.userRegister.isNameEntered &&
      !this.props.userRegister.userRegister.isEmailEntered &&
      !this.props.userRegister.userRegister.isPasswordEntered
    ) {
      const msg = "Hello, what's your name?";
      login = <LoginComp msg={msg} stage="name" />;
    } else if (
      this.props.userRegister.userRegister.isNameEntered &&
      !this.props.userRegister.userRegister.isEmailEntered &&
      !this.props.userRegister.userRegister.isPasswordEntered
    ) {
      const msg = `What's your email, ${this.props.userRegister.user.name} ?`;
      login = <LoginComp msg={msg} stage="email" />;
    } else if (
      this.props.userRegister.userRegister.isNameEntered &&
      this.props.userRegister.userRegister.isEmailEntered &&
      !this.props.userRegister.userRegister.isPasswordEntered
    ) {
      const msg = `What's your password ?`;
      login = <LoginComp msg={msg} stage="password" />;
    }
    return <div className="login">{login}</div>;
  }
}

// export default Login;
function mapStateToProps(state) {
  return {
    user: state.user,
    userRegister: state.userRegister
  };
}

export default connect(mapStateToProps)(Login);
