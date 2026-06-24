const mongoose=require('mongoose')

const connectDB=async()=>{
    const url=process.env.MONGO_URI;
     try {
        
         await mongoose.connect(url)
         console.log(`DB connected successfully ${mongoose.connection.host}`)
     } catch (error) {
        console.log(error.message)
        process.exit(1)
     }
}
module.exports=connectDB