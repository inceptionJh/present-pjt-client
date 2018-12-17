import {
  // login,
  REGISTER_NAME,
  REGISTER_EMAIL,
  REGISTER_PASSWORD
} from '../actions/user.js';

const initialState = {
  isRegistered: false,
  userRegister: {
    isNameEntered: false,
    isEmailEntered: false,
    isPasswordEntered: false
  },
  user: {
    name: '',
    email: '',
    password: ''
  }
};

const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NAME:
      return {
        ...state,
        userRegister: { ...state.userRegister, isNameEntered: true },
        user: { ...state.user, name: action.payload.name }
      };
    case REGISTER_EMAIL:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          isEmailEntered: true
        },
        user: {
          ...state.user,
          email: action.payload.email
        }
      };
    case REGISTER_PASSWORD:
      return {
        ...state,
        isRegistered: true,
        userRegister: {
          ...state.userRegister,
          isPasswordEntered: true
        }
      };
    default:
      return state;
  }
};

export default userRegisterReducer;
