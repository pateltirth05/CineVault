const express=require('express')
const {addToWatchlist, getWatchlist, removeFromWatchlist, addToFavorites, getFavorite, removeFromFavorite, addToWatched, getWatched, removeFromWatched} = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')
const router=express.Router()

router.post("/watchlist/:movieId",protect,addToWatchlist)
router.get('/watchlist',protect,getWatchlist)
router.delete('/watchlist/:movieId',protect,removeFromWatchlist)


router.post("/favorites/:movieId",protect,addToFavorites)
router.get('/favorites',protect,getFavorite)
router.delete('/favorites/:movieId',protect,removeFromFavorite)

router.post("/watched/:movieId",protect,addToWatched)
router.get('/watched',protect,getWatched)
router.delete('/watched/:movieId',protect,removeFromWatched)
module.exports=router