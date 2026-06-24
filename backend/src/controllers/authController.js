const  User =require("../models/User.js")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const register=async(req,res)=>{
    try {
        
        const {name,email,password}=req.body;
        if(!name || !email || !password)
        {
           return  res.status(400).json({message:"fields should not be empty"})
        }
        const existinguser=await User.findOne({email})
        if(existinguser)
        {
            return res.status(400).json({message:"Email is already registred"})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)
        const user=await User.create({
            name,email,password:hashedPassword
        })
        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}

        )
        res.status(201).json({message:"User Registerd Successfully",success:true,token,user:{
                id:user._id,
                name:user.name,
                email:user.email
            }})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={register}