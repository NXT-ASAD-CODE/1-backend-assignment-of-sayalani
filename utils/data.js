import mongoose from "mongoose"
import dotenv from "dotenv"

export const connectDb = async () =>{
try{
    const url = process.env.DATABASE_URL
    console.log(url);
    console.log("databaseconnected");
    
    
    
const response = await mongoose.connect(DATABASE_URL)
}
catch (error) {
console.log(error.message); 

}
}