import { combineReducers } from 'redux';
import userAuthReducer from './userAuth';
import userRegisterReducer from './userRegister';
import settingReducer from './setting';

export default combineReducers({
  user: userAuthReducer,
  userRegister: userRegisterReducer,
  setting: settingReducer
});
