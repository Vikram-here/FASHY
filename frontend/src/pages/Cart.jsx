import React, { use, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from 'react-router-dom';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { cartItem, setCartItem,addtotal  } = useContext(ShopContext);
    const navigate=useNavigate();
                                                  
  // Increase Quantity
  const increaseQty = (id) => {
    const updatedCart = cartItem.map((item) =>
      item._id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItem(updatedCart);
  };
   let del=(id)=>{
             setCartItem(cartItem.filter((item)=>item._id!=id))
        }

  // Decrease Quantity
  const decreaseQty = (id) => {
    const updatedCart = cartItem.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItem(updatedCart);
  };

  // Total Price
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(()=>{
    addtotal(totalPrice);
  },[totalPrice])

  return (
    <div style={{ padding: "20px" }}>
       

      {cartItem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItem.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "20px",
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
              }}
            >
              {/* Image */}
              <img
                src={item.image[0]}
                alt={item.name}
                width="80"
              />

              {/* Name */}
              <h4>{item.name}</h4>

              {/* Price */}
              <p>${item.price}</p>

              {/* Quantity Controls */}
              <div>
                <button onClick={() => decreaseQty(item._id)}>-</button>
                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>
                <button onClick={() => increaseQty(item._id)}>+</button>
              </div>

              {/* Total per product */}
              <p>
                ${item.price * item.quantity}
              </p>
                <div className="del-cart">
                        <button onClick={()=>del(item._id)}><i class="fa-solid fa-trash-can "></i></button>
                </div>
            </div>
          ))}

          {/* Total Cart Price */}
          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px">
            <CartTotal total={totalPrice}></CartTotal>

 
  <div className="w-full text-start">

    <button  onClick={()=>navigate('/place-order')} className="bg-white-800 border border-black text-black px-12 py-3 mt-8 text-sm cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
            Proceed to order
    </button> 

  </div>
            </div>
          </div>
         
        </>
      )}
    </div>
  );
};

export default Cart;