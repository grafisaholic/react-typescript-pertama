import React from 'react'
import UseReducer from './UseReducer'
import UseState from './UseState'

function Index() {
  return (
    <div>
      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>useState Future Value</h2>
    
      <UseState />
    
      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>useReducer Strict Action Types</h2>
    
      <UseReducer />
    </div>
  )
}

export default Index