import React, {useContext, useState, useEffect} from 'react'
import Page from './Page.jsx'
import AppContext from '../AppContext'
import {Redirect} from 'react-router-dom'


const LoginPage = () => {
  const { setUserId, setUser, user } = useContext(AppContext)
  const [ currentUserId, setCurrentUserId ] = useState('')
  const [ redirect, setRedirect ] = useState(false)

  useEffect(() => {
    setUser({name: 'Loading...', createdAt: '2000-01-31T03:24:00', rooms: [], fake: true})
  }, [setUser])

  if (redirect || !user.fake) {
    return <Redirect to='/messages'/>
  }

  return (
    <div>
      <Page>
        <div className=''>
          <div className='text-2xl p-4 bg-green-800 text-white'>Login...</div>
        </div>
        <div className='p-4 bg-gray-300'>
          <input onChange={(e) =>
            {setCurrentUserId(e.target.value)
          }} className='px-1 block rounded' type='password'/>

          <button onClick={() => {
            setUserId(currentUserId)
            setRedirect(true)
          }} className='bg-green-600 block rounded px-4 my-4 text-white hover:bg-green-700'>Login</button>
        </div>
      </Page>
    </div>
  )
}

export default LoginPage
