import React, {useContext, useState} from 'react'
import Page from './Page.jsx'
import AppContext from '../AppContext'
import {Redirect} from 'react-router-dom'

const MessagePage = () => {
  const { user, messages, userId } = useContext(AppContext)
  const [currentMessage, setCurrentMessage] = useState('')

  const date = new Date()
  const displayMessages = messages.map((item, index) => {
    return (
      <ul key={index}>
        {item.userStore.users[item.senderId].name}: {item.parts[0].payload.content}
      </ul>
    );
  });

  if (userId === '') {
    return <Redirect to='/'/>
  }

  return (
    <div>
      <Page>
        <div className=''>
          <div className='text-2xl p-4 bg-green-800 text-white'>{user.name} | {date.toDateString()}</div>
        </div>
        <div style={{overflow: 'scroll'}} className='p-4'>
          {displayMessages}
        </div>
        <div className='bg-gray-300 p-4 w-full'>
          <form onSubmit={(e) => {
            e.preventDefault()
            user.sendSimpleMessage({ text: currentMessage, roomId: user.rooms[0].id })
            setCurrentMessage('')
          }}>
            <input value={currentMessage}  onChange={(e) => setCurrentMessage(e.target.value)}/>
            <button type='submit' className='bg-green-600 rounded px-4 mx-4 text-white hover:bg-green-700'>Send</button>
          </form>
        </div>
      </Page>
    </div>
  )
}

export default MessagePage
