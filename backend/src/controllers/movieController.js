const tmdb=require('../services/tmdbService.js')
const getTrendingMovies = async (req, res) => {
    try {
        const response = await tmdb.get('/trending/movie/week')
        // console.log("TMDB Response:", response.data) // ← add this
        res.status(200).json(response.data)
    } catch (error) {
        // console.log("Full error:", error) // ← replace your existing logs with this
        res.status(500).json({ message: error.message })
    }
}
const getPopularMovies=async(req,res)=>{
    try {
        const response=await tmdb.get('/movie/popular ')
         res.status(200).json(response.data)
    } catch (error) {
           res.status(500).json({ message: error.message })
    }
}
const getTopRatedMovies=async(req,res)=>{
    try {
        const response=await tmdb.get('/movie/top_rated')
         res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getUpcomingMovies=async(req,res)=>{
     try {
        const response=await tmdb.get('/movie/upcoming')
         res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const getNowPlaying=async(req,res)=>{
     try {
        const response=await tmdb.get('/movie/now_playing')
         res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={getTrendingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies,getNowPlaying}