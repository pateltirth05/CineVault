const dotenv=require('dotenv')
dotenv.config();
const express=require('express')
const connectDB=require('./config/db.js')
const authRoute=require('./routes/authRoutes.js')
const movieRoute=require("./routes/movieRoutes.js")
const userRoute=require('./routes/userRoutes.js')
const reviewRoute=require('./routes/reviewRoutes.js')
const app=express()

connectDB()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("cinevault backend is running")
})
app.use("/api/auth",authRoute)
app.use('/api/movies',movieRoute)
app.use('/api/user',userRoute)
app.use('/api/reviews',reviewRoute)
const PORT=Number(process.env.PORT) || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})