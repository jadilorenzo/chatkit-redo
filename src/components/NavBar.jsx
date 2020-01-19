import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className='text-2xl p-4 bg-green-800 text-white'>Chatkit Mesages</div>
      <div className='p-4'><Link className='text-blue-400 underline' to='/'>Home</Link></div>
    </div>
  )
}

export default NavBar
