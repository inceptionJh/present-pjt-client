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
    title: '',
    body: ''
  }
};

export default handleActions(
  {
    [GET_POST_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false
      };
    },
    [GET_POST_SUCCESS]: (state, action) => {
      const { user } = action.result.name;
      // console.log('[+] ')

      return {
        ...state,
        pending: false,
        data: {
          name: user
        }
      };
    },
    [GET_POST_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: action.result
      };
    }
  },
  initialState
);
