import axios from 'axios'
import axiosWithAuth from '../util/axiosWithAuth';
import { types } from './index';

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
} = types;



const url = 'http://localhost:9000'

const apiClient = "doge"
const apiSecret = "doge"


export const loginUser = (data, history) => dispatch => {
  // Oauth Cannot handle straight json have to make a Object 
  const requestData = new FormData();
  requestData.set('username', data.username);
  requestData.set('password', data.password);
  requestData.set('grant_type', 'password'); 
  dispatch({ type: LOGIN_START });
  return axios({
    method: 'POST',
    url: `${url}/login`,
    data: requestData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${apiClient}:${apiSecret}`)}`,
    },
  })
    .then(res => {
      localStorage.setItem('token', res.data.access_token);
     
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      history.push('/homepage/')

    }).then(res => {

      dispatch({ type: GET_USER_INFO_START });

      axiosWithAuth()
        .get(`/users/display/${data.username}`)
        .then(res => {
          dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: GET_USER_INFO_FAILURE, payload: err });
        });

    })


    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    });

};


export const registerUser = (data, history) => dispatch => {
  console.log(data);
  dispatch({ type: REGISTER_USER_START });
  return axios({
    method: 'POST',
    url: `${url}/users/register`,
    data: data,
    headers: {
      Authorization: `Basic ${btoa(`${apiClient}:${apiSecret}`)}`,
    },
  })
    .then(res => {

     localStorage.setItem('token', res.data.access_token);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
      history.push('/homepage/');
    }).then(res => {
      getUserInfo(data.username)

    }).then(res => {

      dispatch({ type: GET_USER_INFO_START });

      axiosWithAuth()
        .get(`/users/display/${data.username}`)
        .then(res => {
          dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: GET_USER_INFO_FAILURE, payload: err });
        });

    })


    .catch(err => {
      dispatch({ type: REGISTER_USER_FAILURE, payload: err });
    });
};


export const getUserInfo = username => dispatch => {
};



