const express=require('express')

const router=express.Router()

const {getTrendingMovies}=require('../controllers/movieController.js')

router.get('/trending',getTrendingMovies)

module.exports=router