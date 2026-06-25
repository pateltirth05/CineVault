const express=require('express')

const router=express.Router()

const {getTrendingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies,getNowPlaying}=require('../controllers/movieController.js')

router.get('/trending',getTrendingMovies)
router.get('/popular',getPopularMovies)
router.get('/top-rated',getTopRatedMovies)
router.get('/upcoming',getUpcomingMovies)
router.get('/now-playing',getNowPlaying)
module.exports=router