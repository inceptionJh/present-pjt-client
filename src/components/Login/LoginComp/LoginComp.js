import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  register_name,
  register_email,
  register_password
} from '../../../actions/user';
import './LoginComp.css';

class LoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({
        value: ''
      });
      const { dispatch } = this.props;
      console.log(
        '[+] keyPress : stage = ',
        this.props.stage,
        typeof this.props.stage
      );

      if (this.props.stage === 'name') {
        localStorage.setItem('userName', this.input.value);
        dispatch(register_name(this.input.value));
      } else if (this.props.stage === 'email') {
        localStorage.setItem('userEmail', this.input.value);
        dispatch(register_email(this.input.value));
      } else if (this.props.stage === 'password') {
        localStorage.setItem('userPassword', this.input.value);
        dispatch(register_password(this.input.value));
      }
    }
  }

  render() {
    return (
      <div className="loginComp">
        <h1>{this.props.msg}</h1>
        <input
          className="login-input"
          ref={ref => {
            this.input = ref;
          }}
          value={this.state.value}
          onKeyDown={this.keyPress}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

LoginComp.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(LoginComp);
