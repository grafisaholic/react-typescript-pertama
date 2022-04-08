import { BUY_CAKE } from './cakeTypes';

const initialState = {
  numOfCakes: 10
}

type actionType = {
  type: string,
  payload: string
}

const cakeReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - parseInt(action.payload)
      }
    default:
      return state
  }
}

export default cakeReducer;