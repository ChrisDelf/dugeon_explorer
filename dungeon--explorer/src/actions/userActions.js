import axios from 'axios'
import axiosWithAuth from '../util/axiosWithAuth';
import { types } from './index';

const {
  GET_MAPS_START,
  GET_MAPS_SUCCESS,
  GET_MAPS_FAILURE,
  GENERATE_MAP_START,
  GENERATE_MAP_SUCCESS,
  GENERATE_MAP_FAILURE,
} = types

const url = 'http://localhost:9000'

const apiClient = "doge"
const apiSecret = "doge"


export const getMaps = (userid) => dispatch => {

  dispatch({ type: GET_MAPS_START });

  axios({
    method: 'GET',
    url: `${url}/users/getmap/${userid}`,
    data: userid,
    header: {
      Authorization: token,
    },
  })

    .then(res => {
      dispatch({ type: GET_MAPS_SUCCESS, payload: res.data })

    })

    .catch(err => {
      dispatch({ type: GET_MAPS_FAILURE, payload: err })

    })


}

export const generateMap = (data, userid) => dispatch => {
  const token = localStorage.getItem('token');

    dispatch({type: MAP_GEN_START});

   axios({
      method: 'GET',
      url: `${url}/users/test/${userid}`,
      data: data,
      headers: {
        Authorization: token,
      },
    })
      .then(res => {
              dispatch({type: MAP_GEN_SUCCESS, payload: res});
      })
      .catch(err => {
              dispatch({type: MAP_GEN_FAILURE, payload: err});
      });
 };



