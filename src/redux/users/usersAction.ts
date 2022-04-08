import axios from 'axios';

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './usersTypes';

type usersProps = {
  [key: string] : {
    name: string
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = (users: usersProps) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (error: string) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return (dispatch: any) => {
    console.log('type', typeof dispatch)
    
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        let users = response.data;
        dispatch(fetchUsersSuccess(users))
      })
      .catch(err => {
        const errorMsg = err.message;
        dispatch(fetchUsersFailure(errorMsg))
      })
  }
}