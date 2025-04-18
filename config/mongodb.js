import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const uri = process.env.MONGO_URI

const connectdb = async ()=>{
    try{
        await mongoose.connect(uri)
        console.log("Mongoose connected");
    }
    catch(error){
        console.log(`Error: ${error}`)
    }
};

export default connectdb;