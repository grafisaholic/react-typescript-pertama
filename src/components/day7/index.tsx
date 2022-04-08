import React from 'react'
import CakeContainer from './CakeContainer'
import CakeContainerWithPayload from './CakeContainerWithPayload'
import IceCreamContainer from './IceCreamContainer'
import UsersContainer from './UsersContainer'

function index() {
  return (
    <div>
      <CakeContainerWithPayload cake />
      <CakeContainer />
      <hr className='my-3'/>
      <IceCreamContainer />
      <hr className='my-3'/>
      <UsersContainer />
    </div>
  )
}

export default index