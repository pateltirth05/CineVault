const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
         required:[true,"Name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email is required"],
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"Password length must be atlest 6 characters"]
    },
    avatar:{
        type:String,

    },
    watchlist:{
        type:[Number],
        default:[]
    },
    favorites:{
        type:[Number],
        default:[]
    },
    watched:{
        type:[Number],
        default:[]
    }

},{timestamps:true});

module.exports=mongoose.model("User",userSchema)
