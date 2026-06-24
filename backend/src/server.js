const express=require('express')
const dotenv=require('dotenv')
const connectDB=require('./config/db.js')
const app=express()

dotenv.config();
connectDB()
app.get("/",(req,res)=>{
    res.send("cinevault backend is running")
})

const PORT=Number(process.env.PORT) || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})