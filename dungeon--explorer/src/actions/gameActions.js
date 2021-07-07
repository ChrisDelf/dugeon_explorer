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

  }).catch(err => { dispatch({ type: UPDATE_PLAYER_FAILURE, payload: err }) })
}

export const updateMonster = (data, monsterid) => dispatch => {
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

  }).catch(err => { dispatch({ type: UPDATE_MONSTER_FAILURE, payload: err }) })
}




export const updateCell = (data, cellId) => dispatch => {
  const token = localStorage.getItem('token');



  axios({
    method: 'PUT',
    url: `${url}/updatecell/{cellId}${cellId}`,
    data: data,
    headers: {
      Authorization: token,
    },
  }).then(res => {
    console.log(res)


  }).catch(err => {
    console.log(err)

  })

}





export const playerMovement = (key, grid, player) => dispatch => {
  // since we don't have to worry about multiple players we can just grab the first one for now
  // need to find a better solutions for this
  const token = localStorage.getItem('token');
  let coord = { x: '', y: '' }

  // up
  if (key.toLowerCase() == "w") {

    coord.x = 0;
    coord.y = 1

  }
  // down
  if (key.toLowerCase() == "s") {
    coord.x = 0;
    coord.y = -1;

  }

  //left
  if (key.toLowerCase() == "a") {
    coord.x = -1;
    coord.y = 0;

  }

  //right
  if (key.toLowerCase() == "d") {
    coord.x = +1;
    coord.y = 0;

  }

  if (coord.x == '' & coord.y == '') {

    return null
  }


  // now we want to check what the player is going to walk into
  let current_cell = grid[player.playery][player.playerx]
  let next_cell = grid[player.playery + coord.y][player.playerx + coord.x]

  if (next_cell.cellType == "Floor") {
    player.playery = player.playery + coord.y
    player.playerx = player.playerx + coord.x

    //we have to update both cell's containsPlayer array

    next_cell.containsP.push(player.playerid)
    console.log(current_cell.containsP)
    current_cell.containsP.pop()


    dispatch({ type: UPDATE_PLAYER_START })

    axios({
      method: 'PUT',
      url: `${url}/game/player/update/${player.playerid}`,
      data: player,
      headers: {
        Authorization: token,
      },
    }).then(res => {
      dispatch({ type: UPDATE_PLAYER_SUCCESS, payload: res.data }).then(() => {
        axios({
          method: 'PUT',
          url: `${url}/updatecell/{cellId}${current_cell, current_cell.cellId}`,
          data: current_cell,
          headers: {
            Authorization: token,
          },
        }).then(res => {
          console.log(res)


        }).catch(err => {
          console.log(err)

        })



      }).then(() => {
        dispatch({ type: UPDATE_PLAYER_SUCCESS, payload: res.data }).then(() => {
          axios({
            method: 'PUT',
            url: `${url}/updatecell/{cellId}${next_cell, next_cell.cellId}`,
            data: next_cell,
            headers: {
              Authorization: token,
            },
          }).then(res => {
            console.log(res)


          }).catch(err => {
            console.log(err)

          })



        })



      })

    }).catch(err => { dispatch({ type: UPDATE_PLAYER_FAILURE, payload: err }) })



    //updatePlayer(player, player.playerid)


    //  .then(() => { updateCell(next_cell, next_cell.cellId) })
    // .then(() => { updateCell(current_cell, next_cell.cellId)})




  }

  return coord
}


