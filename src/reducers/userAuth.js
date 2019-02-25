import { handleActions } from 'redux-actions';
import {
  GET_POST_PENDING,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from '../actions/userAuth';

const initialState = {
  pending: false,
  error: false,
  data: {
    name: '',
    error: ''
  }
};

export default handleActions(
  {
    [GET_POST_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true
      };
    },
    [GET_POST_SUCCESS]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: false,
        data: {
          ...state.data,
          name: action
        }
      };
    },
    [GET_POST_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true,
        data: {
          ...state.data,
          error: action
        }
      };
    }
  },
  initialState
);
