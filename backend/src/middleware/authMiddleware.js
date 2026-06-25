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
                req.user =decoded
                next()
        
    } catch (error) {
                res.status(401).json({message:'Invalid token'})

    }
}
module.exports=protect