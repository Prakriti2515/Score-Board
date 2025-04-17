import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(cors()) //for enabling cors
app.use(express.json()) //for parsing the incoming json data into js object

//mongo connection
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("mongoDb connected"))
.catch((err)=> console.error("Error connecting mongoDb: ", err))

app.get('/', (req,res)=>{
    console.log("Server running")
})
app.listen(port, ()=> console.log(`Port running: ${port}`))