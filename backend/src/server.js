const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db.js')
const authRoute=require('../src/routes/authRoutes.js')
const app=express()

dotenv.config();
connectDB()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("cinevault backend is running")
})
app.use("/api/auth",authRoute)
const PORT=Number(process.env.PORT) || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})