const express=require('express')

const router=express.Router()

const {register,login}=require('../controllers/authController.js')
const protect=require('../middleware/authMiddleware.js')
router.post("/register",register);
router.post("/login",login)
router.get('/me', protect, (req,res)=>{
     console.log("ME ROUTE:", req.user);
    res.json(req.user)
})
module.exports=router