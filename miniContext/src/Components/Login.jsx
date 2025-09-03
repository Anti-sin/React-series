import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const {setUser}=useContext(UserContext) 
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className="flex flex-col gap-5 text-3xl">
      <h2>Login</h2>
      <input
        className="p-2 outline-none rounded-md"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        className="p-2 outline-none rounded-md"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button className="p-2 outline-none rounded-md text-white bg-zinc-800 hover:bg-black " onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login