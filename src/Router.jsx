import React, {useState, useEffect} from 'react'
import MessagePage from './components/MessagePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import chat from './ChatkitApp'
import {v4} from 'uuid'
import AppContext from './AppContext'

const Router = () => {
  const [chatManager, setChatManager] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [userId, setUserId] = useState('')
  const [roomId, setRoomId] = useState(0)
  const [availableRooms, setAvailableRooms] = useState([])
  const [user, setUser] = useState({name: 'Loading...', createdAt: '2000-01-31T03:24:00', rooms: [], fake: true})
  const [messages, setMessages] = useState([/*{partType: "inline", parts: {payload: {type: "text/plain", content: "Hello"}}}*/])

  const state = { messages, setMessages, userId, setUserId, user, setUser, loaded, setLoaded, roomId, setRoomId, availableRooms, setAvailableRooms}

  useEffect(() => {
    if (userId !== '') {
      setMessages([])
      const chatManager = chat.connect(userId, setUser, (message) => {
        setLoaded(true)
        setMessages(m => [...m, message]);
      }, roomId);

      setChatManager(chatManager)
    }
  }, [userId, roomId]);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={state}
      >
        <div className='h-screen w-screen'>
          <Switch>
            <Route exact path='/'>
              <LoginPage/>
            </Route>
            <Route exact path='/messages'>
              <MessagePage/>
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default Router
