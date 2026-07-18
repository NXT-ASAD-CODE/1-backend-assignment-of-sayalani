import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import { connectDb } from "./utils/data.js";
import { DaTa } from "./model/user.model.js";
dotenv.config();
const app = express()
app.use(morgan())
app.use(express.json())
const port = process.env.PORT || 5000
connectDb()
app.get('/data',(req,res)=>{
    res.send(DaTa)
    console.log(DaTa);
    
})
const data = [];
app.post('/post-data',(req,res)=>{
    res.status(201).send({data:req.body,message:"data posted"})
   
    

})