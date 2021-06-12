import axios from 'axios'
import axiosWithAuth from '../util/axiosWithAuth';
import { types } from './index';

const { UPDATE_PLAYER_START,
  UPDATE_PLAYER_SUCCESS,
  UPDATE_PLAYER_FAILURE,
  UPDATE_MONSTER_START,
  UPDATE_MONSTER_SUCCESS,
  UPDATE_MONSTER_FAILURE
} = types

const url = 'http://localhost:9000'

const apiClient = "doge"
const apiSecret = "doge"


export const updatePlayer = (data, playerid) => dispatch => {
  const token = localStorage.getItem('token');

  dispatch({ type: UPDATE_PLAYER_START })

  axios({
    method: 'PUT',
    url: `${url}/game/player/update${playerid}`,
    data: data,
    headers: {
      Authorization: token,
    },
  }).then(res => {
    dispatch({ type: UPDATE_PLAYER_SUCCESS, payload: res.data })

  }).catch(err => { dispatch({ type: UPDATE_PLAYER_FAILURE , payload: err}) })
}

export const updateMonster = (monsterid) => dispatch => {
  const token = localStorage.getItem('token');

  dispatch({ type: UPDATE_MONSTER_START })

  axios({
    method: 'PUT',
    url: `${url}/game/monster/update${monsterid}`,
    data: data,
    headers: {
      Authorization: token,
    },
  }).then(res => {
    dispatch({ type: UPDATE_MONSTER_SUCCESS, payload: res.data })

  }).catch(err => { dispatch({ type: UPDATE_MONSTER_FAILURE , payload: err}) })
}
