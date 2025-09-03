import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <div className=" flex flex-col justify-center items-center gap-4
    h-screen bg-zinc-500 max-w-full">
      <UserContextProvider>
        <h1 className="text-center bg-black w-full text-white text-3xl p-6">
          Login
        </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App
