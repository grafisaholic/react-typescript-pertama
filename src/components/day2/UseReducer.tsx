import React, { useReducer } from 'react'

const initialState = { 
  count: 0
}

type CounterState = {
  count: number
}

/**
 * sparate counter action to dynamic dispact in button
 *  -> dynamic can be passing value or not 
 */
type UpdateAction = {
  type: 'increment' | 'decrement' | 'reset',
  value: number
}

type ResetAction = {
  type: 'reset'
}

// end

type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.value }
    case 'decrement':
      return { count: state.count - action.value }  
    case 'reset':
      return initialState
    default:
      return state
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.count} <br />
      <button 
        className='bg-transparent hover:bg-blue-500 text-blue-700 px-3 py-2 border border-blue-500 hover:text-white rounded-md hover:border-transparent m-2'
        onClick={() => dispatch({ type: 'increment', value: 10 })}
      >
        Increment 10
      </button>
      <button 
        className='bg-transparent hover:bg-pink-500 text-pink-700 px-3 py-2 border border-pink-500 hover:text-white rounded-md hover:border-transparent m-2'
        onClick={() => dispatch({ type: 'decrement', value: 10 })}
      >
        Decrement 10
      </button>
      <button 
        className='bg-transparent hover:bg-slate-500 text-slate-700 px-3 py-2 border border-slate-500 hover:text-white rounded-md hover:border-transparent m-2'
        onClick={() => dispatch({ type: 'reset'})}
      >
        Reset
      </button>
    </div>
  )
}

export default UseReducer