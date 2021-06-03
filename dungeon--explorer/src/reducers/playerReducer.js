import {types} from '../actions/index'

const initState = {
  maps: [],
  selectedMap: '',
  }


const playerReducer = (state = initState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
}





export default playerReducer;
