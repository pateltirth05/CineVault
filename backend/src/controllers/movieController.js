const getTrendingMovies=async(req,res)=>{
    res.status(200).json({
        message:"Trending Movies Controller Working"
    })
}

module.exports={getTrendingMovies}