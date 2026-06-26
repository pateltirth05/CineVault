const Review=require('../models/Review.js')

const createReview=async(req,res)=>{
    try {
        const userId=req.user.id;
        const {movieId,rating,review}=req.body
        if(!movieId || !rating || !review){
            return res.status(400).json({message:"Missing feilds"})
        }

        const existingReview=await Review.findOne({userId,movieId})
        if(existingReview){
            return res.status(409).json({message:"you have already reviewed this movie"})

        }
        if (rating < 1 || rating > 5) {
    return res.status(400).json({
        message: "Rating must be between 1 and 5"
    });
}
        const newreview=await Review.create({userId,movieId,rating,review})
        res.status(201).json({success:true,message:"Review added",review:newreview})
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}
const getMovieReviews=async(req,res)=>{
try {
    const {movieId}=req.params
    if(!movieId){
        return res.status(400).json({
        message: "Movie ID is required"
    });
    }
    const reviews=await Review.find({movieId}).populate("userId","name avatar").sort({createdAt:-1})
    res.status(200).json({success:true,reviews})
} catch (error) {
         res.status(500).json({message:error.message}) 
  
}
}
const updateReview=async(req,res)=>{
try {
    const {reviewId}=req.params
    const {rating,review}=req.body;
    const userId=req.user.id
    if(!reviewId || !rating || !review){
        return res.status(400).json({message:"Missing feilds"})
    }
    const findreview=await Review.findById(reviewId)
    if (!findReview) {
    return res.status(404).json({
        message: "Review not found"
    });
}
    if(!findreview.userId.equals(userId))
    {
        return res.status(403).json({message:"Forbidden"})
    }
    findreview.rating=rating;
    findreview.review=review
    await findreview.save()
    res.status(200).json({success:true,message:"Updated successfully"})
} catch (error) {
             res.status(500).json({message:error.message}) 

}
}
const deleteReview=async(req,res)=>{
try {
    const {reviewId}=req.params;
    const userId=req.user.id
    if(!reviewId){
        return res.status(400).json({message:"Not exist"})
    }
    const findreview=await Review.findById({reviewId})
    if(!findreview.userId.equals(userId))
    {
        await findreview.deleteOne()
    }
    res.status(200).json({success:true,message:"Review Deleted successfully"})
} catch (error) {
             res.status(500).json({message:error.message}) 

}
}
module.exports={createReview,getMovieReviews,updateReview,deleteReview}