import { UsersModel } from "../Models/User.js";
import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express()
app.use(express.json())

app.use(cors())
app.use(express.urlencoded({ extended: true }))

export const UserControllers = async(req,res)=>{
    const receivedData=req.body;
    console.log(receivedData)
}