import { UserContextProvider } from './context/UserContext';

import User from './context/User'
import UseReducer from './UseReducer'
import UseState from './UseState'
import MutableRef from './ref/MutableRef';

function Index() {
  return (
    <div>
      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>useState Future Value</h2>
      <UseState />
    
      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>useReducer Strict Action Types</h2>
      <UseReducer />

      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>useContext Future Value</h2>
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>useRef Mutable</h2>
      <MutableRef />
    </div>
  )
}

export default Index