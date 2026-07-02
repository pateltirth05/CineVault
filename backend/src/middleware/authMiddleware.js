const jwt=require('jsonwebtoken')
const User=require('../models/User.js')

const protect=async(req,res,next)=>{
    try {
        const authHeader=req.headers.authorization;
         if(!authHeader || !authHeader.startsWith('Bearer'))
        {
            return res.status(401).json({message:'No token,access denied'})
        }    
         const token =authHeader.split(' ')[1]
               console.log('Token received:', token)
        console.log('JWT Secret:', process.env.JWT_SECRET)
                const decoded=jwt.verify(token,process.env.JWT_SECRET)
                console.log("Authorization Header:", req.headers.authorization);
                const user=await User.findById(decoded.id).select("-password")
                console.log("User:", user);
                if(!user){
                    return res.status(404).json({message:"User not found"})
                }
                
                req.user =user
                next()
        
    } catch (error) {
                res.status(401).json({message:'Invalid token'})

    }
}
module.exports=protect