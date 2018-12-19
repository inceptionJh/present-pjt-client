/* eslint-disable import/first */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActions from '../../../actions/userAuth';
import * as userRegisterActions from '../../../actions/userRegister';
import './SigninComp.css';

class SigninComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };

    this.keyPress = this.keyPress.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.getPost = this.getPost.bind(this);
    this.wasPostDoneSucccessfully = this.wasPostDoneSucccessfully.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  getPost = async payload => {
    const { PostActions } = this.props;

    try {
      await PostActions.getPost(payload);
    } catch (e) {
      console.log(new Error(e));
    }
  };

  wasPostDoneSucccessfully = props => {
    const { pending, error } = props.user;
    console.log(
      `[+] wasPostDoneSucccessfully: pending = ${pending}, error = ${error}`
    );

    if (pending === false && error === false) return true;
    else return false;
  };

  keyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      this.getPost({
        url: '/signin/',
        data: { email: this.state.email, password: this.state.password }
      })
        .then(response => {
          const { UserRegisterActions } = this.props;

          if (this.wasPostDoneSucccessfully(this.props)) {
            UserRegisterActions.signin_done(this.state.email);
          }
        })
        .catch(error => console.log('error', error));
    }
  }

  render() {
    return (
      <div className="loginComp">
        <h1>{this.props.msg}</h1>
        <h4 className="signError">{this.state.error}</h4>
        <div>
          <input
            className="signinEmail"
            type="text"
            placeholder="email"
            ref={ref => {
              this.signinEmail = ref;
            }}
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </div>
        <div>
          <input
            className="signinPassword"
            type="password"
            ref={ref => {
              this.signinPassword = ref;
            }}
            value={this.state.password}
            placeholder="password"
            onKeyDown={this.keyPress}
            onChange={this.handleChangePassword}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    userRegister: state.userRegister
  }),
  dispatch => ({
    UserRegisterActions: bindActionCreators(userRegisterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(SigninComp);
