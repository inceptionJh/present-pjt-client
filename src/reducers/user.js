import { combineReducers } from "redux";
import {
  // login,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/user.js";

const initialState = {
  isLoggedIn: false,
  fetchingUpdate: false,
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        fetchingUpdate: true
      };
    case LOGIN_SUCCESS:
      console.log("[+] reducer - LOGIN_SUCCESS :", action);
      return {
        ...state,
        fetchingUpdate: false,
        isLoggedIn: true,
        // user: action.result
        user: action.result.data
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        fetchingUpdate: false
      };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer
});
