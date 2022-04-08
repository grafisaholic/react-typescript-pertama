import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux'

interface RootState {
  users: string
}

function UsersContainer() {
  return (
    <div>
      <h2 className='font-bold'>Redux Async Action With Thunk</h2>

    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchData: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)