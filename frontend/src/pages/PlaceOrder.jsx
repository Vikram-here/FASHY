import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlaceOrder = () => {

  const {backendUrl,token,cartItem,setCartItem,delivery_fee,products} =useContext(ShopContext)
const [formData,setFormData]=useState({
  firsName:'',
  lastName:'',
  email:'',
  street:'',
  city:'',
  state:'',
  zipcode:'',
  country:'',
  phone:''

})

const onChangeHandler=(event)=>{
  const name=event.target.name;
  const value=event.target.value;

  setFormData(data=>({...data,[name]:value}))

}

const onSubmitHandler=async (event)=>{
  event.preventDefault()
  try{
   
     
    const orderItems = cartItem.map(cart => {
      return products.find(product => product._id === cart._id);
    });

    console.log(orderItems);
    
    let orderData={
      address:formData,
      items:orderItems,
      amount:total+delivery_fee
    }

    switch(method){
      case 'cod':
        const response=await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
        if(response.data.success){
          // setCartItem([])
          navigate('/orders')
        }else{
          console.log("not  orders")
        }
        
        break;
    }


 
   
  }catch(error){

  }
}

  const [method,setMethod]=useState('')
const navigate=useNavigate();
  const {total} =useContext(ShopContext);
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* -------left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='firsName' value={formData.firsName} className='border border-gray-300 rounded py-1.5 px-3.5  w-full ' type="text"  placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text"  placeholder='Last name' />

        </div>
                  <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="email"  placeholder='Email Address' />
          <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text"  placeholder='Street' />
     <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5  w-full ' type="text"  placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text"  placeholder='State' />

        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5  w-full ' type="number"  placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="text"  placeholder='Country' />

        </div>
                  <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5  w-full ' type="number"  placeholder='Phone' />

      </div>
      {/* ---------right side */}
      <div className="mt-8">
       <div className="mt-8 min-w-80">
          <CartTotal total={total}></CartTotal>

       </div>
       <div className="mt-12">
        <Title text1={'PAYMENT'} text2={'METHOD'}></Title>
        {/* payment method */}
        <div className="flex gap-3 flex-col lg:flex-row">
          <div onClick={ ()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
            <p className={`min-w-3.5 h-3.5  border rounded-full ${method === 'stripe' ? 'bg-green-400': ' '}`}></p>
            <img  className='h-5 mx-4 ' src={assets.stripe_logo} alt="" />
          </div>
          <div onClick={ ()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
            <p className={`min-w-3.5  h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400': ' '}`}></p>
            <img  className='h-5 mx-4 ' src={assets.razorpay_logo} alt="" />
          </div>
          <div onClick={ ()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer ">
            <p className={`min-w-3.5 h-3.5  border rounded-full ${method === 'cod' ? 'bg-green-400': ' '}`}></p>
            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
           </div>
        </div>

        <div className="w-full text-center mt-8">
          <button type='submit'   className='bg-white-800 border border-black text-black px-16 py-3 text-sm cursor-pointer hover:bg-black hover:text-white transition-all duration-500'>PLACE ORDER</button>
        </div>
       </div>

      </div>
    </form>
  )
}

export default PlaceOrder
