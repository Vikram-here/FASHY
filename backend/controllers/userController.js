import validator from 'validator';
import UserModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
const loginUser=async (req,res)=>{

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
        // const salt=await bcrypt.genSalt(3)
        // const hashpass= await bcrypt.hash(password,salt)
        const newUser=new UserModel({name,email,password })

        await newUser.save()
        res.status(201)
        .json({
            message:"signup successfully",
            success:true
        })
    }catch(err){
res.status(500)
        .json({
            message:"internal error",
            success:false
        })
    }
}

// route for admin
const adminLogin=async (req,res)=>{

}
export {loginUser,registerUSer,adminLogin}