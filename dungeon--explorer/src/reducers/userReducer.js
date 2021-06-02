import {types} from '../actions/index';

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = types;

const initState = {
  id: '',
  userName: '',
  token:'',
  authLoading: false,
  isAuthSuccess: false,
  error:'',
  maps: [],};


const userReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case LOGIN_START:
      console.log("START", payload)
    return{...state,
    error:'',
    authLoading: true,
    };

    case LOGIN_SUCCESS:
      console.log("SUCCESS",payload)
    return {
    ...state,
    error:'',
    authLoading: false,
    token: payload.token,
    userName: payload.username,
    id:payload.id,
    maps: payload.maps}

    case LOGIN_FAILURE:
      console.log("Failure", payload)
    return{
    ...state,
    error:payload.error,
    authLoading: false,
    }

    default:
      return state;
    
  }
}

export default userReducer;
