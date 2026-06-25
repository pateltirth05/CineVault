const express=require('express')

const router=express.Router()

const {getTrendingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies,getNowPlaying,getSearchMovie, getMovieDetails, getMovieCast, getMovieVideo, getMovieSimilar, getMovieRecommendations}=require('../controllers/movieController.js')

router.get('/trending',getTrendingMovies)
router.get('/popular',getPopularMovies)
router.get('/top-rated',getTopRatedMovies)
router.get('/upcoming',getUpcomingMovies)
router.get('/now-playing',getNowPlaying)
router.get('/search',getSearchMovie)
router.get('/:id/cast',getMovieCast)
router.get('/:id/videos',getMovieVideo)
router.get('/:id/similar',getMovieSimilar)
router.get('/:id/recommendations',getMovieRecommendations)
router.get('/:id',getMovieDetails)
module.exports=router