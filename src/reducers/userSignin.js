// import { combineReducers } from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/user.js';

const initialState = {
  isSigninNow: false,
  isSignedIn: false,
  user: {
    name: ''
  }
};

const userSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isSigninNow: true };
    case LOGIN_SUCCESS:
      console.log('[+] reducer - LOGIN_SUCCESS :', action);
      return {
        ...state,
        isSigninNow: false,
        isSignin: true,
        user: action.result.data
      }; // user: action.result
    case LOGIN_FAILURE:
      return { ...state, isSigninNow: false };
    default:
      return state;
  }
};

export default userSigninReducer;

// export default combineReducers({
//   user: userReducer
// });
