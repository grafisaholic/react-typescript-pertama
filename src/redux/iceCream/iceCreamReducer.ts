import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCream: 20
}

type actionType = {
  type: string
}

const iceCreamReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }
  
    default:
      return state
  }
}

export default iceCreamReducer