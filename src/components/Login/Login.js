import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterComp from './RegisterComp/RegisterComp';
import SinginComp from './SigninComp/SigninComp';

class Login extends Component {
  render() {
    let login;
    let { isRegisteredIn } = this.props.userRegister;
    let {
      isNameEntered,
      isEmailEntered,
      isPasswordEntered
    } = this.props.userRegister.userRegister;

    // Registeration
    if (!isRegisteredIn) {
      if (!isNameEntered && !isEmailEntered && !isPasswordEntered) {
        login = <RegisterComp msg="Hello, what's your name?" stage="name" />;
      } else if (isNameEntered && !isEmailEntered && !isPasswordEntered) {
        const msg = `What's your email, ${this.props.userRegister.user.name} ?`;
        login = <RegisterComp msg={msg} stage="email" />;
      } else if (isNameEntered && isEmailEntered && !isPasswordEntered) {
        login = <RegisterComp msg="What's your password ?" stage="password" />;
      }
      // Signing
    } else {
      login = <SinginComp msg="Welcome black! please login." />;
    }
    return <div className="login">{login}</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userRegister: state.userRegister
  };
}

export default connect(mapStateToProps)(Login);
