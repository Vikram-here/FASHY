import React from 'react'
import {useState} from 'react'
const Login = () => {
  const [current,setCurrent]=useState('login')
  const onSubmithandler=(event)=>{
event.preventDefault();
  }
  return (
     <form onSubmit={ onSubmithandler} className='flex flex-col itmes-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'> 
       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{current}</p>
       <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
       </div>
       {current != "login" ? <input type="text"  className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/> : ''}
      <input type="email"  className='w-full px-3 py-2 border border-gray-800' placeholder='mail' required/>
      <input type="password"  className='w-full px-3 py-2 border border-gray-800' placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {
          current === 'login' ?
          <p onClick={()=>setCurrent('sign up')} className='cursor-pointer' >Create account</p>
          : <p onClick={()=>setCurrent('login')} className='cursor-pointer' >login here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{ current=== 'login '? 'sign in' : 'sign up'}</button>


     </form>
  )
}

export default Login
