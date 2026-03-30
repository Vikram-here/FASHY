import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Add = () => {
  return (
     <form>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div>
          <label htmlFor='image1'>
            <img className='w-20' src={assets.upload_area} alt="" />
            <input type="file" id='image1 ' hidden/>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2 mt-2'>Product Name</p>
        <input className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type Here'/>
      </div>
       <div className='w-full'>
        <p className='mb-2 mt-2'>Product Description</p>
        <textarea className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='write the content of product'/>
      </div>
     </form>
  )
}

export default Add
