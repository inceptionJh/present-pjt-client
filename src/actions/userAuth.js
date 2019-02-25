import axios from 'axios';

import config from '../config';
const { SERVER_URL } = config();

export const GET_POST_PENDING = 'GET_POST_PENDING';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

function getPostAPI(payload) {
  return axios({
    url: SERVER_URL + payload.url,
    method: 'post',
    data: {
      email: payload.data.email,
      password: payload.data.password
    }
  });
}

export const getPost = payload => dispatch => {
  dispatch({ type: GET_POST_PENDING });

  return getPostAPI(payload)
    .then(response => {
      dispatch({
        type: GET_POST_SUCCESS,
        payload: {
          data: response.data,
          error: ''
        }
      });
      // return {
      //   type: GET_POST_SUCCESS,
      //   result: { name: response }
      // };
    })
    .catch(error => {
      dispatch({
        type: GET_POST_FAILURE,
        payload: {
          data: '',
          error: error.response.data
        }
      });
      // return {
      //   type: GET_POST_FAILURE,
      //   payload: error
      // };

      /*
      // if (error.response.data.error === 'NEED-TO-SIGNUP') {
      const signUpPayload = {
        url: SERVER_URL + '/signup',
        method: 'post',
        data: {
          email: payload.data.email,
          password: payload.data.password
        }
      };
      console.log('[*] getPostAPI = ', signUpPayload);

      return getPostAPI(signUpPayload)
        .then(response => {
          dispatch({
            type: GET_POST_SUCCESS,
            result: {
              name: response
            }
          });
        })
        .catch(error => {
          dispatch({
            type: GET_POST_FAILURE,
            payload: error.response.data
          });
        });
      // }
        */

      // throw error;
    });
};
