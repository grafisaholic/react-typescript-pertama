import React, { useState } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../../redux'

type Props = {
  item?: number,
  buyItem: (number: string) => void
}

interface RootState {
  cake?: {
    numOfCakes: number
  },
  iceCream?: {
    numOfIceCream: number
  }
}

interface MyComponentProps {
  cake?: boolean
}

function CakeContainerWithPayload(props: Props) {
  const [number, setNumber] = useState('1')

  return (
    <div>
      <h2 className='text-lg font-bold'>Number Of Cake = {props.item}</h2>
      <input className='px-2 py-1 border-2 mr-3 rounded-md' type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <button 
        className='bg-gray-400 hover:bg-slate-300 text-white px-4 h-8 border rounded-md hover:border-transparent'
        onClick={() => props.buyItem(number)}
      >
        Buy {number} Cake
      </button>
    </div>
  )
}

const mapStateToProps = (state: RootState, ownProps: MyComponentProps) => {
  const itemState = ownProps.cake ? state.cake?.numOfCakes : state.iceCream?.numOfIceCream;

  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: MyComponentProps) => {
  const dispatchFunction = ownProps.cake 
    ? (number: string) => dispatch(buyCake(number))
    : () => dispatch(buyIceCream())

  return {
    buyItem: dispatchFunction
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainerWithPayload)