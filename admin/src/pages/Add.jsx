import React, { useState } from 'react'
import { assets } from '../assets/admin_assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { handleError, handleSucces } from '../components/Util'
import { toast, ToastContainer } from 'react-toastify'

const Add = ({token}) => {
  const [image1,setImage1]=useState(false)

  const [name,setName]=useState('')
  const [description,setDescription]=useState("")
  const [price,setPrice]=useState("")
  const [category,setCategory]=useState("Men")
  const [subCategory,setSubCategory]=useState("Topwear")
  const [bestseller,setBestseller]=useState(false)
  const [quantity,setQuantity]=useState("1")

  const onSubmitHandle = async (e)=>{
    e.preventDefault()
    try{
     const formData=new FormData()
     formData.append("name",name)
     formData.append("description",description)
     formData.append("price",price)
     formData.append("category",category)
     formData.append("subCategory",subCategory)
     formData.append("bestseller",bestseller)
     formData.append("quantity",quantity)
     formData.append("image1",image1)

     const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
     if(response.data.success){
         handleSucces(response.data.message);
          setName("");
           setDescription("");
          setPrice("");
           
         
     }else{
      handleError("something mistake")
     }
    

    }catch(error){
   console.log(error)
    }
  }

  return (
    <div>
    <div>
     <form onSubmit={onSubmitHandle}>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div>
          <label htmlFor='image1'>
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2 mt-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type Here' required/>
      </div>
       <div className='w-full'>
        <p className='mb-2 mt-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='write the content of product' required/>
      </div>
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-3'>Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2' required>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-3'>Product Subcategory</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2' required>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='mb-3'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px] ' type="Number" placeholder='***' required/>
        </div>
      </div>
      <div className='flex gap-2 mt-3'>
        <input onChange={()=>setBestseller(prev => !prev)}  checked={bestseller} type="checkbox" id="bestseller"  />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button  className='cursor-pointer w-28 py-3 mt-4 bg-black text-white rounded' type='Submit'>ADD</button>
      
     </form>
         <ToastContainer></ToastContainer>
     </div>
     </div>
     

  )
}

export default Add
