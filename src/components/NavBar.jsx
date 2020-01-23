import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'

const NavBar = () => {
  const { user, setRoomId, setAvailableRooms, availableRooms } = useContext(AppContext)
  console.log(user, availableRooms);

  const roomOptions = user.rooms.map((room, index) => (
    <div className='bg-gray-300' key={index} onClick={() => {
      setRoomId(index)
    }}><div className='p-4'>{room.name}</div></div>
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
      <div className='bg-gray-300' style={{overflow: 'scroll'}}>
        <svg className='p-4 w-1/2 mx-auto' width="100%" height="100%" viewBox="0 0 182.72 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="#008800">
            <path d="M73.51.11,90.94,10.18a.84.84,0,0,0,.84,0L109.21.11a.84.84,0,0,1,.84,0l17.22,9.94a.42.42,0,0,1,0,.73L91.57,31.4a.45.45,0,0,1-.42,0L55.45,10.78a.42.42,0,0,1,0-.73L72.67.11A.84.84,0,0,1,73.51.11Z"></path>
            <path d="M18.91,31.88,91.15,73.59a.4.4,0,0,0,.42,0l72.25-41.71a.42.42,0,0,0,0-.73L146.6,21.21a.86.86,0,0,0-.85,0l-54,31.16a.84.84,0,0,1-.84,0L37,21.21a.86.86,0,0,0-.85,0L18.91,31.15A.42.42,0,0,0,18.91,31.88Z"></path>
            <path d="M181.46,42.8,110.05,84a.84.84,0,0,0-.42.73v19.88a.43.43,0,0,0,.64.37l72.24-41.71a.44.44,0,0,0,.21-.37V43.53A.84.84,0,0,0,181.46,42.8Z"></path>
            <path d="M109.63,127v19.88a.43.43,0,0,0,.64.37l72.24-41.71a.44.44,0,0,0,.21-.37V85.73a.84.84,0,0,0-1.26-.73l-71.41,41.22A.84.84,0,0,0,109.63,127Z"></path>
            <path d="M109.63,169.15V189a.42.42,0,0,0,.64.36l72.24-41.71a.41.41,0,0,0,.21-.36v-19.4a.84.84,0,0,0-1.26-.73l-71.41,41.23A.84.84,0,0,0,109.63,169.15Z"></path>
            <path d="M1.27,42.8,90.94,94.57a.84.84,0,0,1,.42.73V199.58a.42.42,0,0,1-.63.36L73.3,189.88a.41.41,0,0,1-.21-.36V105.61a.44.44,0,0,0-.21-.37L.21,63.29A.44.44,0,0,1,0,62.92V43.53A.84.84,0,0,1,1.27,42.8Z"></path>
            <path d="M1.27,85l53.12,30.67a.83.83,0,0,1,.43.73v62.08a.42.42,0,0,1-.64.36L36.76,168.78a.4.4,0,0,1-.22-.36V126.71a.44.44,0,0,0-.21-.37L.21,105.49a.44.44,0,0,1-.21-.37V85.73A.84.84,0,0,1,1.27,85Z"></path>
            <path d="M1.27,127.19l16.58,9.58a.84.84,0,0,1,.42.73v19.88a.42.42,0,0,1-.63.37L.21,147.68a.41.41,0,0,1-.21-.36v-19.4A.85.85,0,0,1,1.27,127.19Z"></path>
          </g>
        </svg>
        <div className='mx-auto w-1/2 text-center my-2' style={{color: '#008800'}}>Lovingly made with Chatkit</div>
      </div>
      <div className='p-4'><Link className='text-blue-400 underline' to='/'>Login</Link></div>
      {roomOptions}
      {!user.fake ?
        <button onClick={async () => {
          setAvailableRooms(await user.getJoinableRooms())
        }} className='m-4 bg-green-600 block rounded px-4 my-4 text-white hover:bg-green-700'>Join a room +</button>
      : <div/>}
      {joinRoomOptions}
    </div>
  )
}

export default NavBar
