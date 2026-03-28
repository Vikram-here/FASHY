// function for add product 
const addProduct=async (req,res)=>{
try{
const {name,description,price,category,subCategory,bestSeller,quantity} =req.body;
const image1=req.files.image1[0];
console.log(name,description,price,category,subCategory,bestSeller,quantity);
console.log(image1);

res.json({})
}catch(error){
    console.log(error);
res.json({success:false,message:error.message})
}
}

//function for listproducts
const listProducts=async (req,res)=>{

}

// function for removeProducts
const  removeProducts=async (req,res)=>{

}

//function for singleProduct
const singleProduct=async (req,res)=>{

}

export {listProducts,addProduct,removeProducts,singleProduct};