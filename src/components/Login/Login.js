import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './Login.css';
import RegisterComp from './RegisterComp/RegisterComp';
import SinginComp from './SigninComp/SigninComp';
import { black } from 'ansi-colors';

class Login extends Component {
  render() {
    let login;
    // Registeration
    if (!this.props.userRegister.isRegisteredIn) {
      if (
        !this.props.userRegister.userRegister.isNameEntered &&
        !this.props.userRegister.userRegister.isEmailEntered &&
        !this.props.userRegister.userRegister.isPasswordEntered
      ) {
        const msg = "Hello, what's your name?";
        login = <RegisterComp msg={msg} stage="name" />;
      } else if (
        this.props.userRegister.userRegister.isNameEntered &&
        !this.props.userRegister.userRegister.isEmailEntered &&
        !this.props.userRegister.userRegister.isPasswordEntered
      ) {
        const msg = `What's your email, ${this.props.userRegister.user.name} ?`;
        login = <RegisterComp msg={msg} stage="email" />;
      } else if (
        this.props.userRegister.userRegister.isNameEntered &&
        this.props.userRegister.userRegister.isEmailEntered &&
        !this.props.userRegister.userRegister.isPasswordEntered
      ) {
        const msg = `What's your password ?`;
        login = <RegisterComp msg={msg} stage="password" />;
      }
      // Signing
    } else {
      login = <SinginComp msg="Welcome black! please login." />;
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
