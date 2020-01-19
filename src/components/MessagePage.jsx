import React, {useContext} from 'react'
import Page from './Page.jsx'
import AppContext from '../AppContext'

const MessagePage = () => {
  const { user, messages } = useContext(AppContext)

  const date = new Date(user.createdAt)
  const displayMessages = messages.map((item, index) => {
    return (
      <ul key={index}>
        {item.userStore.users[item.senderId].name}: {item.parts[0].payload.content}
      </ul>
    );
  });

  return (
    <div>
      <Page>
        <div>
          <div className='text-2xl p-4 bg-green-800 text-white'>{user.name} | {date.toDateString()}</div>
        </div>
        <div style={{overflow: 'scroll'}} className='p-4'>
          {displayMessages}
        </div>
        <div className='bg-gray-300 p-4 w-full'>
          <input/>
          <button className='bg-green-600 rounded px-4 mx-4 text-white hover:bg-green-700'>Send</button>
        </div>
      </Page>
    </div>
  )
}

export default MessagePage
