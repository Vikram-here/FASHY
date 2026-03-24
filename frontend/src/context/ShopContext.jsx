import { createContext } from "react";
import { products} from '../assets/frontend_assets/assets'
import { useState } from "react";
export const ShopContext=createContext();

const ShopContextProvider=({children})=>{
    const currency='$';
    const delivery_fee=10;
   
    const[cartItem,setCartItem]=useState([]);
    const [total,setTotal]=useState(0);

    const addtotal=(value)=>{
        setTotal(value);
    }
    
     const addToCart=(item,event)=>{
         
        setCartItem([...cartItem,item])
        console.log(cartItem);
        
    }
     let del=(id)=>{
             setCartItem(cartItem.filter((item)=>item.id!=id))
        }
        //  const handlePrice =(amount)=>{
        //     console.log(price)
        //     setPrice(price+amount)
        //    }

     const value={
        products,currency,delivery_fee,addToCart,cartItem,setCartItem, addtotal,total
    }
    return(
        <ShopContext.Provider value={value }>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;