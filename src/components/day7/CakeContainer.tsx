import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../../redux'
import { AppState } from '../../redux/store'

function CakeContainer() {
  /** REACT-REDUX WITH HOOK */
  const numOfCakes = useSelector((state: AppState) => state.cake.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      

      <h2 className='text-lg font-bold'>Number Of Cake = {numOfCakes}</h2>
      <button 
        className='bg-gray-400 hover:bg-slate-300 text-white px-4 h-8 border rounded-md hover:border-transparent'
        onClick={() => dispatch(buyCake('1'))}
      >
        Buy Cake
      </button>
    </div>
  )
}

export default CakeContainer