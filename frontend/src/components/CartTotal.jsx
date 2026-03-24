import React from 'react'
import Title from '../components/Title'
const CartTotal = ({total}) => {
  return (
    <div>
                <Title text1={'CART'} text2={'TOTAL PRICE'}></Title>

      <p>Product price - ${total}</p>
      <p>Shipping fees - $10</p>

      <hr className='w-1/2 border-gray-800  my-3  '></hr>

      <p>TOTAL PRICE -${total +10}</p>

    </div>
  )
}

export default CartTotal
