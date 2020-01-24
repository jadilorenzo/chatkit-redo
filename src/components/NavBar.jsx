import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'
import {Redirect} from 'react-router-dom'

const NavBar = () => {
  const { user, roomId, setRoomId, setAvailableRooms, availableRooms, isCreatingRoom, setIsCreatingRoom} = useContext(AppContext)
  if (isCreatingRoom) {
    return <Redirect to='/create-room'/>
  }

  const roomOptions = user.rooms.map((room, index) => (
    <div className='bg-gray-300' key={index} onClick={() => {
      setRoomId(index)
    }}><div className={`p-4 ${(roomId === index) ? 'bg-gray-400' : ''}`}>{room.name}</div></div>
  ))

  const joinRoomOptions = availableRooms.map((room, index) => <div key={index} onClick={() => {
    user.joinRoom({roomId: room.id}).then(() => {
      setRoomId(index)
      setAvailableRooms([])
    }).catch(console.error)
  }} className='p-4 bg-gray-300'>{room.name}</div>)

  return (
    <div>
      <div className='text-2xl p-4 bg-green-800 text-white'>Chatkit Mesages</div>
      <div className='p-4'>
        <Link className='text-blue-400 underline' to='/'>Login</Link>
        <br/>
        <Link className='text-blue-400 underline' to='/info'>Info</Link>
      </div>
      {roomOptions}
      {!user.fake ?
        <div>
          <button onClick={async () => {
            setAvailableRooms(await user.getJoinableRooms())
          }} className='m-4 bg-green-600 block rounded px-4 my-4 text-white hover:bg-green-700'>Join a room +</button>
          <button onClick={() => {
              setIsCreatingRoom(true)
          }} className='m-4 bg-green-600 block rounded px-4 my-4 text-white hover:bg-green-700'>Create a room +</button>
        </div>
      : <div/>}
      {joinRoomOptions}
    </div>
  )
}

export default NavBar
