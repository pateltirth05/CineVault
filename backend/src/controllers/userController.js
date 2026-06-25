const User=require('../models/User.js')
const addToWatchlist=async(req,res)=>{
    try {
        const {movieId}=req.params;
        const userId=req.user.id
    
       const user= await User.findById(userId)
        if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    if(user.watchlist.includes(Number(movieId)))
    {
          return res.status(409).json({
        message: "Movie already exists in watchlist",
      });
    }
        user.watchlist.push(Number(movieId))
        await user.save();
           res.status(200).json({
      success: true,
      message: "Movie added to watchlist",
      watchlist: user.watchlist,
    });
    } catch (error) {
         res.status(500).json({
      message: error.message,
    });
    }
}
module.exports=addToWatchlist