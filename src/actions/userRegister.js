// import config from '../config';
// const { SERVER_URL } = config();

export const REGISTER_NAME = 'REGISTER_NAME';
export const REGISTER_EMAIL = 'REGISTER_EMAIL';
export const REGISTER_PASSWORD = 'REGISTER_PASSWORD';
export const REGISTER_DONE = 'REGISTER_DONE';
export const SIGNIN_DONE = 'SIGNIN_DONE';

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

export const register_done = email => {
  return {
    type: REGISTER_DONE,
    payload: {
      email: email
    }
  };
};

export const signin_done = email => {
  return {
    type: SIGNIN_DONE,
    payload: {
      email: email
    }
  };
};
