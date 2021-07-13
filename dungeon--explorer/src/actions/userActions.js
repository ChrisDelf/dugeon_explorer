
import axios from 'axios'
import axiosWithAuth from '../util/axiosWithAuth';
import { types } from './index';

const {
  GET_MAPS_START,
  GET_MAPS_SUCCESS,
  GET_MAPS_FAILURE,
  GEN_MAP_START,
  GEN_MAP_SUCCESS,
  GEN_MAP_FAILURE,
  SELECT_MAP_SUCCESS,
  SELECT_MAP_START,
  SELECT_MAP_FAILURE
} = types

const url = 'http://localhost:9000'

const apiClient = "doge"
const apiSecret = "doge"


export const getMaps = (userid) => dispatch => {
  const token = localStorage.getItem('token');

  dispatch({ type: GET_MAPS_START });

  axios({
    method: 'GET',
    url: `${url}/users/getmaps/${userid}`,
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


  dispatch({ type: GEN_MAP_START });
  axios({
    method: 'POST',
    url: `${url}/game/generatemap/${userid}`,
    data: data,
    headers: {
      Authorization: token,
    },
  })
    .then(res => {
      dispatch({ type: GEN_MAP_SUCCESS, payload: res });
    })
    .catch(err => {
      dispatch({ type: GEN_MAP_FAILURE, payload: err });
    });
};

export const selectMap = (mapid) => dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: SELECT_MAP_START })

  axios({
    method: 'GET',
    url: `${url}/game/selectmap/${mapid}`,
    headers: {
      Authorization: token,
    },


  }).then(res => {
    dispatch({ type: SELECT_MAP_SUCCESS, payload: res.data })

  }).catch(err => {
    dispatch({ type: SELECT_MAP_FAILURE, payload: err })

  })


}

export const loadMap = (mapid, history) => dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: SELECT_MAP_START })

  axios({
    method: 'GET',
    url: `${url}/game/selectmap/${mapid}`,
    headers: {
      Authorization: token,
    },


  }).then(res => {
    dispatch({ type: SELECT_MAP_SUCCESS, payload: res.data })

  }).catch(err => {
    dispatch({ type: SELECT_MAP_FAILURE, payload: err })

  }).then( () => {

  history.push("/gamepage/")

  })


}





