const User=require("../models/User.js")
const tmdb=require('../services/tmdbService.js')
const getRecommendations=async(req,res)=>{
   try {
       const userId=req.user.id
       const user=await User.findById(userId)
       if(!user)
       {
        return res.status(404).json({message:"User not found"})
       }
       if(user.favorites.length===0)
       {
          return res.status(400).json({message:"Add favorite movies to get recommendations"})
       }
       const response=await Promise.all(user.favorites.map((movieId)=>tmdb.get(`/movie/${movieId}`)))
    const movies=response.map((responses)=>responses.data)

    const genreIds=[];
    for(const movie of movies)
    {
        for(const genre of movie.genres)
        {
            genreIds.push(genre.id)
        }
    }
    console.log(genreIds)
    const genreCount={}
    for(const genreId of genreIds)
    {
        genreCount[genreId]=(genreCount[genreId] || 0)+1;
    }
    console.log(genreCount)

   const genreList = Object.keys(genreCount).map(Number);
    const moviesresponse = await tmdb.get("/discover/movie", {
    params: {
        with_genres: genreList.join(",")
    }
});
return res.status(200).json({
    success: true,
    recommendations: response.data.results
});
    } catch (error) {
    res.status(500).json({message:error.message})
   }

}