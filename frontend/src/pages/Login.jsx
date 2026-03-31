import React, { useContext, useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'
const Login = () => {

  const [current,setCurrent]=useState('login')
  const{token,setToken,navigate,backendUrl}=useContext(ShopContext);

const [name,setName]=useState("")
const [password,setPassword]=useState("")
const [email,setEmail]=useState("")


const onSubmithandler=async (event)=>{
event.preventDefault();
  try{
if(current !=='login'){
const response =await axios.post(backendUrl + "/api/user/register",{name,email,password})
 if(response.data.success){
  setToken(response.data.token)
  localStorage.setItem("token",response.data.token)
 }
}else{
const response =await axios.post(backendUrl + "/api/user/login",{email,password})
 if(response.data.success){
  setToken(response.data.token)
  localStorage.setItem("token",response.data.token)

 }

}

  }catch(error){

  }
  }

  useEffect(()=>{
    if(token){
 navigate('/');
    }
   
  },[token])
  return (
     <form onSubmit={ onSubmithandler} className='flex flex-col itmes-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'> 
       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{current}</p>
       <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
       </div>
       {current !== "login" ? <input  onChange={(e)=>setName(e.target.value)} value={name} type="text"  className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/> : ''}
      <input onChange={(e)=>setEmail(e.target.value)}  value={email} type="email"  className='w-full px-3 py-2 border border-gray-800' placeholder='mail' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"  className='w-full px-3 py-2 border border-gray-800' placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {
          current === 'login' ?
          <p onClick={()=>setCurrent('sign up')} className='cursor-pointer' >Create account</p>
          : <p onClick={()=>setCurrent('login')} className='cursor-pointer' >login here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>{ current !== 'login'?'sign up':'sign in'}</button>


     </form>
  )
}

export default Login
