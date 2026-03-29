import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'
// function for add product 
const addProduct=async (req,res)=>{
try{
const {name,description,price,category,subCategory,bestSeller,quantity} =req.body;
const image1=req.files.image1[0];

const images=[image1].filter((item)=>item!== undefined)

let imagesUrl=await Promise.all(
    images.map(async (item)=>{
        let result =await cloudinary.uploader.upload(item.path,{resource_type:'image'});
        return result.secure_url;
    })
)

const productData={
    name,
    description,
    category,
    subCategory,
    price:Number(price),
    bestSeller: bestSeller === "true" ? true : false,
    quantity:Number(quantity),
    image:imagesUrl,
    date:Date.now()

}
console.log(productData);
const product =new productModel(productData);
await product.save();
 
res.json({success:true,message:"product added"})
}catch(error){
    console.log(error);
res.json({success:false,message:error.message})
}
}

//function for listproducts
const listProducts=async (req,res)=>{
try{
    
    const products =await productModel.find({});
    res.json({success:true,products})



}catch(error){
    res.json({success:false,message:error.message})
}
}

// function for removeProducts
const  removeProducts=async (req,res)=>{
try{
  
    await productModel.findByIdAndDelete(req.body.id);
    res.json({
        success:true,
        message:"product removed successfully"
    })

}catch(error){
    res.json({success:false,message:error.message})

}
}

//function for singleProduct
const singleProduct=async (req,res)=>{

}

export {listProducts,addProduct,removeProducts,singleProduct};