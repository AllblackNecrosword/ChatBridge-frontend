import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [input,setInput]=useState({
    email:"",
    password:"",
  })

  const inputHandler = (e)=>{
    const {name,value}=e.target;
    setInput({...input,[name]:value})
  }

  const submithandler=()=>{
    alert("Login Submitted")
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        className="w-full max-w-sm p-8 bg-white border border-gray-300 rounded-lg shadow-md"
        onSubmit={submithandler}
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <div className="space-y-4 my-4">
          <input
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            type="email"
            name="email"
            value={input.email}
            onChange={inputHandler}
         
          />
          <input
            className="block w-full p-2 border border-gray-300 rounded"
            placeholder="Password"
            type="password"
            name="password"
            value={input.password}
            onChange={inputHandler}
        
          />
          <button
            className="border p-3 rounded-2xl bg-blue-900 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
        <span >
          Don't have an account ? <Link to={"/register"} className="text-green-800">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login
