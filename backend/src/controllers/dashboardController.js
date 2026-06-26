const User=require("../models/User.js")
const getDashboard=async(req,res)=>{
try {
   const userId=req.user.id
   const  user=await User.findById(userId)
   if(!user){
   return res.status(404).json({message:"User not found"})
   }
   const watchlistCount=user.watchlist.length;
   const favoritesCount=user.favorites.length;
   const watchedCount=user.watched.length

} catch (error) {
    res.status(500).json({message:error.message})
}
}
module.exports=getDashboard