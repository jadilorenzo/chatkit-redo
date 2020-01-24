import React, {useContext} from 'react'
import AppContext from '../AppContext'
import {v4} from 'uuid'
import {Redirect} from 'react-router-dom'

const CreateRoomPage = () => {
  const {user, newRoomName, setNewRoomName, isCreatingRoom, setIsCreatingRoom} = useContext(AppContext)

  if (!isCreatingRoom || user.fake) {
    return <Redirect to='/messages'/>
  }

  return (
    <div className="flex flex-col h-screen w-full">
      <div className='text-2xl p-4 bg-green-800 text-white'>Create A Room</div>
      <div className='w-4/5 rounded bg-gray-200 my-4 mx-auto p-2'>
        <div className='text-xl'>Room Name</div>
        <hr className='py-1'/>
        <input onChange={(e) => {
          setNewRoomName(e.target.value)
        }} className='w-full rounded p-1'/>
        <button onClick={() => {
          user.createRoom({roomId: v4(), name: newRoomName})
            .then(() => {
              setIsCreatingRoom(false)
            })
        }} className='block mx-auto rounded bg-green-700 hover:bg-green-800 my-1 p-1 text-white'>Create</button>
      </div>
    </div>
  )
}

export default CreateRoomPage
