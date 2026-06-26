const express=require('express')
const router=express.Router()
const {createReview, getMovieReviews, updateReview, deleteReview}=require('../controllers/reviewController.js')
const protect = require('../middleware/authMiddleware.js')
router.post("/",protect,createReview)
router.get("/:movieId",protect,getMovieReviews)
router.put("/:reviewId",protect,updateReview)
router.delete("/:reviewId",protect,deleteReview)
module.exports=router