import React, {useState, useEffect} from 'react'
import MessagePage from './components/MessagePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import InfoPage from './components/InfoPage.jsx'
import CreateRoomPage from './components/CreateRoomPage.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import chat from './ChatkitApp'
import AppContext from './AppContext'

const Router = () => {
  const [availableRooms, setAvailableRooms] = useState([])
  const [chatManager, setChatManager] = useState({})
  const [isCreatingRoom, setIsCreatingRoom] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [messages, setMessages] = useState([/*{partType: "inline", parts: {payload: {type: "text/plain", content: "Hello"}}}*/])
  const [newRoomName, setNewRoomName] = useState('')
  const [roomId, setRoomId] = useState(0)
  const [userId, setUserId] = useState('')
  const [user, setUser] = useState({name: 'Loading...', createdAt: '2000-01-31T03:24:00', rooms: [], fake: true})



  const state = {
    availableRooms, setAvailableRooms,
    chatManager, setChatManager,
    isCreatingRoom, setIsCreatingRoom,
    loaded, setLoaded,
    messages, setMessages,
    newRoomName, setNewRoomName,
    roomId, setRoomId,
    userId, setUserId,
    user, setUser
  }

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
            <Route exact path='/info'>
              <InfoPage/>
            </Route>
            <Route exact path='/create-room'>
              <CreateRoomPage/>
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  )
}

export default Router
