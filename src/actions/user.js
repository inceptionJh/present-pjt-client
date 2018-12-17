const config = require('../config');
const { SERVER_URL } = config();

export const LOGIN = 'LOGIN';
export const REGISTER_NAME = 'REGISTER_NAME';
export const REGISTER_EMAIL = 'REGISTER_EMAIL';
export const REGISTER_PASSWORD = 'REGISTER_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILSURE';

export const register_name = name => {
  return {
    type: REGISTER_NAME,
    payload: {
      name: name
    }
  };
};

export const register_email = email => {
  return {
    type: REGISTER_EMAIL,
    payload: {
      email: email
    }
  };
};

export const register_password = password => {
  return {
    type: REGISTER_PASSWORD,
    payload: {
      password: password
    }
  };
};

export const login = (email, password) => {
  return {
    type: LOGIN,
    promise: {
      method: 'post',
      url: SERVER_URL + '/signin',
      data: { email, password }
    }
  };
};
