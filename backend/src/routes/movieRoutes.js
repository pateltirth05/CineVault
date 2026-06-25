const express=require('express')

const router=express.Router()

const {getTrendingMovies,getPopularMovies}=require('../controllers/movieController.js')

router.get('/trending',getTrendingMovies)
router.get('/popular',getPopularMovies)
module.exports=router