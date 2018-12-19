/* eslint-disable import/first */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

// import config from '../../../config';
// const { SERVER_URL } = config();
// import {
//   register_name,
//   register_email,
//   register_password
// } from '../../../actions/userRegister';
import * as postActions from '../../../actions/userAuth';
import * as userRegisterActions from '../../../actions/userRegister';
import './RegisterComp.css';

class RegisterComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      email: '',
      password: ''
    };

    this.keyPress = this.keyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.wasPostDoneSucccessfully = this.wasPostDoneSucccessfully.bind(this);
    this.getPost = this.getPost.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  wasPostDoneSucccessfully = props => {
    const { pending, error } = props.user;
    console.log(
      `[+] wasPostDoneSucccessfully: pending = ${pending}, error = ${error}`
    );

    if (pending === false && error === false) return true;
    else return false;
  };

  getPost = async payload => {
    const { PostActions } = this.props;

    try {
      await PostActions.getPost(payload);
    } catch (e) {
      console.log(new Error(e));
    }
  };

  keyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.setState({
        value: ''
      });
      const { PostActions, UserRegisterActions } = this.props;
      if (this.props.stage === 'name') {
        this.setState({
          ...this.state,
          name: this.input.value,
          value: ''
        });
        localStorage.setItem('userName', this.input.value);
        UserRegisterActions.register_name(this.input.value);
      } else if (this.props.stage === 'email') {
        this.setState({ ...this.state, email: this.input.value, value: '' });
        localStorage.setItem('userEmail', this.input.value);
        UserRegisterActions.register_email(this.input.value);
      } else if (this.props.stage === 'password') {
        this.setState({
          ...this.state,
          password: this.input.value,
          value: ''
        });
        localStorage.setItem('userPassword', this.input.value);
        UserRegisterActions.register_password(this.input.value);
        // TODO: this.state.password is not updated at this point due to async behavior.
        this.getPost({
          url: '/signup/',
          data: { email: this.state.email, password: this.input.value }
        })
          .then(response => {
            const { UserRegisterActions } = this.props;

            if (this.wasPostDoneSucccessfully(this.props)) {
              UserRegisterActions.register_done(this.state.email);
            }
          })
          .catch(error => console.log('error', error));
      }
    }
  }

  render() {
    return (
      <div className="registerComp">
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

// function mapStateToProps(state) {
//   return { user: state.user };
// }

// RegisterComp.propTypes = {
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
)(RegisterComp);
