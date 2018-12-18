import { handleActions } from 'redux-actions';
import {
  // login,
  REGISTER_NAME,
  REGISTER_EMAIL,
  REGISTER_PASSWORD,
  REGISTER_DONE,
  SIGNIN_DONE
} from '../actions/userRegister';

const initialState = {
  isRegisteredIn: false,
  isSignIn: false,
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

export default handleActions(
  {
    [REGISTER_NAME]: (state, action) => {
      return {
        ...state,
        userRegister: { ...state.userRegister, isNameEntered: true },
        user: { ...state.user, name: action.payload.name }
      };
    },
    [REGISTER_EMAIL]: (state, action) => {
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
    },
    [REGISTER_PASSWORD]: (state, action) => {
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          isPasswordEntered: true
        },
        user: {
          ...state.user,
          password: action.payload.password
        }
      };
    },
    [REGISTER_DONE]: (state, action) => {
      return {
        ...state,
        isRegisteredIn: true
      };
    },
    [SIGNIN_DONE]: (state, action) => {
      return {
        ...state,
        isSignIn: true
      };
    }
  },
  initialState
);

// const userRegisterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER_NAME:

//     case REGISTER_EMAIL:
//       r
//     case REGISTER_PASSWORD:

//     default:
//       return state;
//   }
// };

// export default userRegisterReducer;
