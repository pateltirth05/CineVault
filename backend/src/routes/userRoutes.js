const express=require('express')
const addToWatchlist = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')
const router=express.Router()

router.post("/watchlist/:movieId",protect,addToWatchlist)

module.exports=router