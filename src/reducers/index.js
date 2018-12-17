import { combineReducers } from 'redux';
import userSigninReducer from './userSignin';
import userRegisterReducer from './userRegister';

export default combineReducers({
  user: userSigninReducer,
  userRegister: userRegisterReducer
});
