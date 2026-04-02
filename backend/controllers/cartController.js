import productModel from "../models/productModel.js";
 import UserModel from "../models/userModel.js";

// add products to user cart
const addToCart= async (req,res)=>{
try{
const {userId,itemId,size}=req.body
const userData=await UserModel.findById(userId);
const product= await productModel.findById(itemId)
const cartData=await userData.cartData;
 const itemIndex = cartData.findIndex(
      item => item.itemId === itemId
    );

 if (itemIndex > -1) {
      cartData[itemIndex].quantity += 1;
    } else {
      cartData.push({
        itemId
      });
    }

await UserModel.findByIdAndUpdate(userId,{cartData})
res.json({
    success:true,message:"added to cart"
})
}catch(error){
console.log(error)
res.json({success:true,message:error.message})
}
}
//update user cart
const updateCart= async (req,res)=>{
try{
const {userId,itemId,size,quantity}=req.body
const userData=await UserModel.findById(userId);
const cartData=await userData.cartData;

cartData[itemId][size]=quantity
await UserModel.findByIdAndUpdate(userId,{cartData})
res.json({
    success:true,message:"added to cart"
})

}catch(error){
console.log(error)
res.json({success:true,message:error.message})
}
}

// get user cart
const getUserCart= async (req,res)=>{
 
try {
    const {userId} = req.body; // from JWT middleware

    const user = await UserModel.findById(userId);

    res.json({
      success: true,
      cartData:user.cartData
    });

  } catch (error) {
    res.json({ success: false, message:"try block" });
  }
}


export {addToCart,getUserCart,updateCart}