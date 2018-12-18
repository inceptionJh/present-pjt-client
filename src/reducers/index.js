import { combineReducers } from 'redux';
import userAuthReducer from './userAuth';
import userRegisterReducer from './userRegister';

export default combineReducers({
  user: userAuthReducer,
  userRegister: userRegisterReducer
});
