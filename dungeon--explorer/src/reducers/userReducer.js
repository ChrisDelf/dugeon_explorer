import { types } from '../actions/index';

const {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} = types;

const initState = {
  id: '',
  userName: '',
  token: '',
  authLoading: false,
  isAuthSuccess: false,
  error: '',
  mapIds: [],
};


const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        authLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        authLoading: false,
        token: payload.token,
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        error: payload.error,
        authLoading: false,
      }

    case REGISTER_USER_START:
      return {
        ...state,
        error: '',
        authLoading: true
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        error: '',
        authLoading: false,
        token: payload.token,
      }

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        error: payload.error,
        authLoading: false,
      }

    default:
      return state;

  }
}

export default userReducer;
