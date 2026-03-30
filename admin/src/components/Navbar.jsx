import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='flex items-center py-3 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button onClick={()=>navigate('/')} className=' cursor-pointer bg-black px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm text-white'>Logout</button>
    </div>
  )
}

export default Navbar
