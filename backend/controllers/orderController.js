import orderModel from "../models/orderModel.js"
import UserModel from "../models/userModel.js"

// place order using cod method
const placeOrder=async (req,res)=>{

    try{
     
        const {userId,items,amount,address} =req.body
        const orderData={
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder=new orderModel(orderData)
         await newOrder.save()
         await UserModel.findByIdAndUpdate(userId,{cartData:{}})
         res.json({success:true,message:"order placed"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// place order using stripe method
const placeOrderStripe=async (req,res)=>{
    
}
// place order using razorpay method
const placeOrderRazorpay=async (req,res)=>{
    
}

// all orders data for admin panel
const allOrders=async (req,res)=>{
    try{
const orders =await orderModel.find({})
res.json({success:true,orders})
    }catch(error){
    console.log(error)
    }
}

// user order data for frontend
const userOrders=async (req,res)=>{
    try{
      const {userId}=req.body
      const orders =await orderModel.find({userId})
      res.json({success:true,message:orders})
    }catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
    }
}

// update status from admin panel
const updateStatus=async (req,res)=>{
    try{
      const {orderId,status} =req.body
      await orderModel.findByIdAndUpdate(orderId,{status})
      res.json({success:true,message:"status updated"})
    }catch(error){
      res.json({success:false,message:"status not  updated"})

    }
}

export {updateStatus,placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders}