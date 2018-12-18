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
      password: ''
    };

    this.keyPress = this.keyPress.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();

      const { PostActions, UserRegisterActions } = this.props;

      PostActions.getPost({
        url: '/signin/',
        data: { email: this.state.email, password: this.state.password }
      })
        .then(response => {
          console.log('[+] /signup : success.');
          console.log(response);
          UserRegisterActions.signin_done(this.state.email);
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <div className="loginComp">
        <h1>{this.props.msg}</h1>
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

// function mapStateToProps(state) {
//   return { user: state.user };
// }

// SigninComp.propTypes = {
//   user: PropTypes.objectOf(PropTypes.any).isRequired,
//   dispatch: PropTypes.func.isRequired
// };

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    UserRegisterActions: bindActionCreators(userRegisterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(SigninComp);
