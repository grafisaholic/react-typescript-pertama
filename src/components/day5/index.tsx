import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Products() {
  const [filter, setFilter] = useSearchParams();
  const filterActive = filter.get('active') === 'true'
  return (
    <div>
      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>React Router : Nested Route</h2>

      <label className="block text-gray-700 text-sm font-bold mb-2">
        Search
      </label>
      <input className="shadow appearance-none border w-80 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Value" />

      <nav className='w-full my-6'>
        <Link to='new' className='text-blue-500 bg-slate-300 m-2 hover:text-blue-800 p-3'>New</Link>
        <Link to='feature' className='text-blue-500 bg-slate-300 m-2 hover:text-blue-800 p-3'>Feature</Link>
      </nav>
      <div className='box-border w-full'>

        <Outlet />
      </div>

      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>React Router : Search Params</h2>
      <button className='px-4 py-2 bg-pink-500 m-2 text-white rounded-md' onClick={() => setFilter({ active: 'true' })}>Active User</button>
      <button className='px-4 py-2 bg-pink-500 m-2 text-white rounded-md' onClick={() => setFilter({})}>Reset Filter</button>

      {filterActive 
        ? <h2>Showing filter active user</h2>
        : <h2>Showing all user</h2>
      }
    </div>
  )
}

export default Products