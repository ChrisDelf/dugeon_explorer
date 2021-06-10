import { types } from '../actions/index'

const {
  GEN_MAP_START,
  GEN_MAP_SUCCESS,
  GEN_MAP_FAILURE,
  GET_MAPS_START,
  GET_MAPS_SUCCESS,
  GET_MAPS_FAILURE,

} = types;


const initState = {
  maps: [],
  selectedMap: '',
  playerLoading: false,
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
    default:
      return state;
  }
}





export default playerReducer;
