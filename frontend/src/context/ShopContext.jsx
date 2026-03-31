import { createContext, useEffect } from "react";
// import { products} from '../assets/frontend_assets/assets'
import { useState } from "react";
import axios from "axios";
import { handleError } from "../../../admin/src/components/Util";
import { useNavigate } from "react-router-dom";
export const ShopContext=createContext();

const ShopContextProvider=({children})=>{
    const currency='$';
    const delivery_fee=10;
    const backendUrl="http://localhost:8080";
   
    const[cartItem,setCartItem]=useState([]);
    const [total,setTotal]=useState(0);
    const[products,setProducts]=useState([]);
    const [token,setToken]=useState('')
     const navigate=useNavigate();
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

const getProductData = async ()=>{
    try{
     const response= await axios.get( backendUrl + "/api/product/list")
      
     if(response.data.success){
        setProducts(response.data.products)
     }else{
        handleError(response.data.message)
     }
    
    }catch(error){
       console.log(error)
    }
}


    useEffect(()=>{
        getProductData();
    },[])

    useEffect(()=>{
        if(!token && localStorage.getItem('token'))
            setToken(localStorage.getItem('token'))
    },[])

     const value={
        products,navigate,setToken,token,currency,delivery_fee,addToCart,cartItem,setCartItem, addtotal,total,backendUrl
    }
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;