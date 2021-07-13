import { types } from '../actions/index'

const {
  GEN_MAP_START,
  GEN_MAP_SUCCESS,
  GEN_MAP_FAILURE,
  GET_MAPS_START,
  GET_MAPS_SUCCESS,
  GET_MAPS_FAILURE,
  SELECT_MAP_SUCCESS,
  SELECT_MAP_START,
  SELECT_MAP_FAILURE,
  UPDATE_GRID_START,
  UPDATE_GRID_SUCCESS,
  UPDATE_GRID_FAILURE,
  UPDATE_PLAYER_START,
  UPDATE_PLAYER_SUCCESS,
  UPDATE_PLAYER_FAILURE


} = types;


const initState = {
  selectedMap: '',
  selectedGrid: [],
  maps: [],
  monsters: [],
  players: [],
  grid: [],
  playerLoading: false,
  playerId: '',
  player: '',
  mapId: '',

}


const playerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MAPS_START:
      return {
        ...state, error: '',
        playerLoading: true
      }

    case GET_MAPS_SUCCESS:
      return {
        ...state,
        error: '',
        maps: payload,
        playerLoading: false
      }

    case GET_MAPS_FAILURE:
      return {
        ...state,
        error: payload,
        playerLoading: false
      }


    case GEN_MAP_START:
      return {
        ...state,
        error: ' ',
        playerLoading: true,
      }

    case GEN_MAP_SUCCESS:
      return {
        ...state,
        error: '',
        selectedMap: payload,
        playerLoading: false,
      }

    case GEN_MAP_FAILURE:
      return {
        ...state,
        error: payload,
        playerLoading: false,
      }
    case SELECT_MAP_START:
      return {
        ...state,
        error: '',
        playerLoading: true,
      }
    case SELECT_MAP_SUCCESS:

      return {
        ...state,
        error: '',
        grid: JSON.parse(payload.grid),
        players: payload.players,
        player: payload.players[0],
        monsters: payload.monsters,
        mapId: payload.mapid,
        playerLoading: false,
      }
    case SELECT_MAP_FAILURE:
      return {
        ...state,
        error: payload,
        playerLoading: false
      }

    case UPDATE_GRID_START:

      return {
        ...state,
        error: '',
        playerLoading: true,
      }

    case UPDATE_GRID_SUCCESS:
      return {
        ...state,
        playerLoading: false,
        grid: JSON.parse(payload.grid),

      }

    case UPDATE_GRID_FAILURE:
      return {
        ...state,
        playerLoading: false,
        error: payload
      }
    case UPDATE_PLAYER_START:
      return {
        ...state,
        playerLoading: true,
        error: ''
      }
    case UPDATE_PLAYER_SUCCESS:
     
      return {
        ...state,
        playerLoading: false,
        player: payload,
      }
    case UPDATE_PLAYER_FAILURE:
      return {
        ...state,
        playerLoading: false,
        error: ''
      }
    default:
      return state;
  }

}





export default playerReducer;
