import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <h1 className='text-center bg-black w-full text-white text-3xl p-6' >React day 8</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
