const User=require('../models/User.js');
const tmdb = require('../services/tmdbService.js');
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
  console.log("1. User found");

if (user.watchlist.includes(Number(movieId))) {
    console.log("2. Already exists");
    return res.status(409).json({
        message: "Movie already exists in watchlist",
    });
}

console.log("3. Before push");

user.watchlist.push(Number(movieId));

console.log("4. Before save");

await user.save();

console.log("5. After save");
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

const getWatchlist=async(req,res)=>{
    try {
        const userId=req.user.id;

        const user=await User.findById(userId)

        if(!user){
            return res.status(404).json({message:"User not found"})
        }
console.log("Watchlist:", user.watchlist);

user.watchlist.forEach((movieId) => {
  console.log("Movie ID:", movieId, typeof movieId);
});
        const response=await Promise.all(user.watchlist.map((movieId)=>tmdb.get(`/movie/${movieId}`)))

        const movies=response.map((response)=>response.data)
    res.status(200).json({success:true,count:movies.length,watchlist:movies})
    } catch (error) {
          console.log(error.response?.data);
    console.log(error.response?.status);
      res.status(500).json({
      message: error.message,
    });   
    }
}

const removeFromWatchlist=async(req,res)=>{
    try {
        const {movieId}=req.params
        const userId=req.user.id;
    
        const user=await User.findById(userId)
        if(!user)
        {
            res.status(404).json({message:"User not found"})
        }
        if (!user.watchlist.includes(Number(movieId))) {
      return res.status(404).json({
        message: "Movie not found in watchlist",
      });
    }
    user.watchlist=user.watchlist.filter(
        (id)=>id!==Number(movieId)
    )
    await user.save()

        res.status(200).json({
      success: true,
      message: "Movie removed from watchlist",
      watchlist: user.watchlist,
    });
    } catch (error) {
       res.status(500).json({
      message: error.message,
    });   
    }
}
const addToFavorites=async(req,res)=>{
    try {
        const {movieId}=req.params;
        const userId=req.user.id
    
       const user= await User.findById(userId)
        if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

if (user.favorites.includes(Number(movieId))) {
    
    return res.status(409).json({
        message: "Movie already exists in favorites",
    });
}


user.favorites.push(Number(movieId));

await user.save();


           res.status(200).json({
      success: true,
      message: "Movie added to watchlist",
      favorites: user.favorites,
    });
    } catch (error) {
         res.status(500).json({
      message: error.message,
    });
    }
}
const getFavorite = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const response = await Promise.all(
      user.favorites.map((movieId) => tmdb.get(`/movie/${movieId}`))
    );

    const movies = response.map((response) => response.data);

    res.status(200).json({
      success: true,
      count: movies.length,
      favorites: movies,
    });
  } catch (error) {
    console.log(error.response?.data);
    console.log(error.response?.status);

    res.status(500).json({
      message: error.message,
    });
  }
};

const removeFromFavorite=async(req,res)=>{
    try {
        const {movieId}=req.params
        const userId=req.user.id;
    
        const user=await User.findById(userId)
        if(!user)
        {
            res.status(404).json({message:"User not found"})
        }
        if (!user.favorites.includes(Number(movieId))) {
      return res.status(404).json({
        message: "Movie not found in favorites list",
      });
    }
    user.favorites=user.favorites.filter(
        (id)=>id!==Number(movieId)
    )
    await user.save()

        res.status(200).json({
      success: true,
      message: "Movie removed from favorites",
      favorites: user.favorites,
    });
    } catch (error) {
       res.status(500).json({
      message: error.message,
    });   
    }
}
const addToWatched=async(req,res)=>{
  try {
    const {movieId}=req.params;
    const userId=req.user.id;

    const user=await User.findById(userId);
    if(!user)
    {
      return res.status(404).json({message:"User not found"})
    }
    if(user.watched.includes(Number(movieId)))
    {
      return res.status(409).json({message:"Movie is already watched"})
    }
    user.watched.push(Number(movieId))
    await user.save()

    res.status(200).json({success:true,message:"Movie added to watched",watched:user.watched})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}
const getWatched = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const response = await Promise.all(
      user.watched.map((movieId) => tmdb.get(`/movie/${movieId}`))
    );

    const movies = response.map((response) => response.data);

    res.status(200).json({
      success: true,
      count: movies.length,
      watched: movies,
    });
  } catch (error) {
    console.log(error.response?.data);
    console.log(error.response?.status);

    res.status(500).json({
      message: error.message,
    });
  }
};
const removeFromWatched=async(req,res)=>{
  try {
     const {movieId}=req.params
        const userId=req.user.id;
    
        const user=await User.findById(userId)
        if(!user)
        {
            res.status(404).json({message:"User not found"})
        }
        if (!user.watched.includes(Number(movieId))) {
      return res.status(404).json({
        message: "Movie not found in watched list",
      });
    }
    user.watched=user.watched.filter(
      (id)=>id!==Number(movieId)
    )
    await user.save()
      res.status(200).json({
      success: true,
      message: "Movie removed from favorites",
      watched: user.favorites,
    });
  } catch (error) {
     res.status(500).json({
      message: error.message,
    });   
  }
}
module.exports={addToWatchlist,getWatchlist,removeFromWatchlist,addToFavorites,getFavorite,removeFromFavorite,addToWatched,getWatched,removeFromWatched}