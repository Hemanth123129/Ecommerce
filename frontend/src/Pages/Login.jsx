import React, { useState } from 'react'

function Login() {

  const [loginstate, setloginstate] = useState("Sign-Up")

  const Handlesubmit = (e) =>{
    e.preventDefault()
    
  }
  return (
    <form onSubmit={Handlesubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 mt-10 m-auto gap-4 text-gray-900'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{loginstate}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {loginstate === "Login"? '' :<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email address' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      {loginstate === "Sign-Up"?<input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Confirm Password' required />:""}

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          loginstate === "Login"
          ?<p className='cursor-pointer' onClick={()=>setloginstate('Sign-Up')}> Create Account</p>
          :<p className='cursor-pointer' onClick={()=>setloginstate('Login')}> Login Here</p>
        }
      </div>
      <button className='text-white bg-black py-3 px-8 text-medium'>{loginstate === "Login"? "Login" : "Sign-Up"}</button>
    </form>
  )
}

export default Login
