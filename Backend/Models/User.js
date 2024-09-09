import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true
    }
})
export const UsersModel = mongoose.model("Usersmodel",UsersSchema)