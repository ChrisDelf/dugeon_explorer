import axios from 'axios'
import axiosWithAuth from '../util/axiosWithAuth';
import {types} from './index';

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} = types;



const url = 'http://localhost:9000'

const apiClient = "doge"
const apiSecret = "doge"


export const loginUser = (data, history) => {
    // Oauth Cannot handle straight json have to make a Object 
  const requestData = new FormData();
  requestData.set('username', data.username);
  requestData.set('password', data.password);
  requestData.set('grant_type', 'password');
    return dispatch => {
  dispatch({type: LOGIN_START})

    return axios({
      method:'POST',
      url:`${url}/login`,
      data: requestData,
      headers: {'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${apiClient}:${apiSecret}`)}`,
      },
    })
  
    .then(res => {
    localStorage.setItem('token', res.data.token);

    dispatch({type: LOGIN_SUCCESS, payload: res.data})

  })
    .catch(err => {
    dispatch({type: LOGIN_FAILURE, paylaod: err})
    })
  }
}
