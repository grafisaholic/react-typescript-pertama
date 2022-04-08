import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './usersTypes';

const initialValue = {
  loading: false,
  users: [],
  error: ''
}

type userProps = {
  name: string,
}

type actionProps = {
  type: string,
  payload: userProps[] 
}

const reducer = (state = initialValue, action: actionProps) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS: 
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE: 
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer