import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { handleError, handleSucces } from '../components/Util'
import { ToastContainer } from 'react-toastify'

const List = ({token}) => {

  const [list,setList]=useState([])
const fetchList=async ()=>{
try{
const response =await axios.get(backendUrl + "/api/product/list")

if(response.data.success){
  handleSucces(response.data.message)
setList(response.data.products)
}else{
  handleError("error")
}
 

}catch(error){

}
  }


  const removeProduct=async (id)=>{
      try{
        const response =await axios.post(backendUrl + "/api/product/remove" ,{id}, {headers:{token}})
         if(response.data.success){
          handleSucces(response.data.message)
            await fetchList()
          }
          else{
            console.log("error")
          }
      }catch(error){

      }
  }

  useEffect(()=>{
    fetchList()
  },[])
  return (
    <div>
      <p>All Products</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center] py-2 px-2 border bg-gray-100 text-sm'>
             <b>Image</b>
             <b>name</b>
             <b>category</b>
             <b>price</b>
             <b className='text-center'>action</b>
             </div>
             {/* product list */}
             {
              list.map((item,index)=>(
                <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 gap-2 px-2 border text-sm' key={index}>
                   <img className='w-12' src={item.image[0]} alt="" />
                   <p>{item.name}</p>
                   <p>{item.category}</p>
                   <p>$ {item.price}</p>
                   <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
                </div>
              ))
             }
        <ToastContainer></ToastContainer>
      </div>
     </div>
  )
}

export default List
