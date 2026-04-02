import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price,prod}) => {
    const {currency,addToCart}  =useContext(ShopContext);
  return (
    <div className='mx-2 '>
      <Link className='text-gray-700 cursor-pointer  '  >
        <div className="overflow-hidden mx-">
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=' '></img>

        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
        <div className='flex justify-center mt-1'>        <button className=' cursor-pointer border w-full text-center   mt-1 bg-black text-white' onClick={()=>addToCart(prod,id)}>add to cart</button>
</div>
     </Link>
     </div>
  )
}

export default ProductItem
