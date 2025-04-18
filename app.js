import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/mongodb.js"

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(cors()) //for enabling cors
app.use(express.json()) //for parsing the incoming json data into js object

//mongo connection
connectDb();

app.get('/', (req,res)=>{
    console.log("Server running")
})
app.listen(port, ()=> console.log(`Port running: ${port}`))