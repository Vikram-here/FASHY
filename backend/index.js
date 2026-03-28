import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
const app=express();
const PORT=8080;
connectDB().then(()=>{
    console.log("DB connected successfully")
 }).catch((err)=>{
    console.log("DB not connected")
 })
// middleware
app.use(express.json())
app.use(cors())

//api endpoints

app.use('/api/user',userRouter);
app.use('/api/product',productRouter)


app.get('/',(req,res)=>{
res.send("api work")
})

app.listen(PORT,()=>{
    console.log(`listening on port no ${PORT}`)
});