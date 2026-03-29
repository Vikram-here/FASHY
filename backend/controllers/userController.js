import validator from 'validator';
import UserModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

// login
const loginUser=async (req,res)=>{
    try{
const {email,password}=req.body;
const user = await UserModel.findOne({email});
if(!user){
    res.json({success:false,message:"user doesnt exist"})
}

const match= await bcrypt.compare(password,user.password);
if(match){
    const token =createToken(user._id);
        res.json({success:true,message:"login successfully",token})

}
else{
  res.json({success:false,message:"wrong credential please check " })

}
    }catch(error){
      console.log(error);
      res.json({success:false,message:error.message})
    }


}

// route for user registration

const registerUSer =async (req,res)=>{
  try{
        const {name,email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({
                message:"user already exist , you can login direct",success:false
            });
        } 
        const salt=await bcrypt.genSalt(10)
        const hashpass= await bcrypt.hash(password,salt)
        const newUser=new UserModel({name,email,password:hashpass })

        const userInfo = await newUser.save()
        const token = createToken(userInfo._id);


        res.status(201)
        .json({
            message:"signup successfully",
            success:true,
            token
        })
    }catch(err){
        console.log(err);
        
res.status(500)
        .json({
            message:err,
            success:false
        })
    }
}

// route for admin
const adminLogin=async (req,res)=>{
try{
 const {email,password} =req.body;
 if(email===process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){

    const token=jwt.sign(email+password,process.env.JWT_SECRET);
    res.json({success:true,token})
 }
 else{
    res.json({success:false,message:"invalid credential"})
 }

}catch(error){
      res.json({success:false,message:error.message})

}


}
export {loginUser,registerUSer,adminLogin}