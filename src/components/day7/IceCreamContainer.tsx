import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../../redux'
import { AppState } from '../../redux/store'

function IceCreamContainer() {
  const numOfIceCream = useSelector((state: AppState) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className='text-lg font-bold'>Number Of Ice Cream - {numOfIceCream}</h2>
      <button 
        className='bg-gray-400 hover:bg-slate-300 text-white px-4 h-8 border rounded-md hover:border-transparent'
        onClick={() => dispatch(buyIceCream())}
      >
        Buy Cake
      </button>
    </div>
  )
}

export default IceCreamContainer