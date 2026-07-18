import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema ({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:true,     
        unique:true   
    },
    age:Number,
    isActive:Boolean,
    createdAt:new Date().toString()
},{timestamps:true})
userSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,10)
    next()
})
 export const DaTa = mongoose.model("Data",userSchema)