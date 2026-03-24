import express from 'express'
import cors from 'cors'
import 'dotenv/config'
const app=express();
const PORT=8080;
 
// middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.get('/',(req,res)=>{
res.send("api work")
})

app.listen(PORT,()=>{
    console.log(`listening on port no ${PORT}`)
});