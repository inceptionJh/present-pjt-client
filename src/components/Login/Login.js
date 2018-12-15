import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/user';
import './Login.css';

class Login extends Component {
  static propTypes = {
    user: PropTypes.objectOf(PropTypes.any).isRequired,
    dispatch: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    const email = this.email.value;
    const pw = this.password.value;
    // console.log(this.props);

    dispatch(login(email, pw));
  };

  render() {
    const { user } = this.props;
    console.log(user);

    return user.isLoggedIn ? (
      <div className="login">{user.user.name}</div>
    ) : (
      <div className="login">
        <span>이메일</span>
        <input
          ref={ref => {
            this.email = ref;
          }}
        />
        <span>비밀번호</span>
        <input
          type="password"
          ref={ref => {
            this.password = ref;
          }}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Login);
