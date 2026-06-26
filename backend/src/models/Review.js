const mongoose=require('mongoose')

const reviewSchema=new mongoose.Schema({
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    movieId:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    review:{
        type:String,
        required:true,
        trim:true
    },
    
},{timestamps:true})

module.exports=mongoose.model("Review",reviewSchema)