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

module.exports={getTrendingMovies}